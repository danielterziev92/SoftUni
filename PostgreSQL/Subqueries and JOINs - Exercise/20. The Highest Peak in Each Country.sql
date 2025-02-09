WITH ElevationRank
         AS (SELECT c.country_name,
                    p.peak_name,
                    p.elevation,
                    m.mountain_range,
                    ROW_NUMBER() OVER (PARTITION BY c.country_name ORDER BY elevation DESC ) as elevation_rank
             FROM mountains_countries AS mc
                      LEFT JOIN peaks AS p
                                USING (mountain_id)
                      RIGHT JOIN countries AS c USING (country_code)
                      LEFT JOIN mountains AS m ON mc.mountain_id = m.id)
SELECT country_name,
       COALESCE(peak_name, '(no highest peak)') AS peak_name,
       COALESCE(elevation, 0)                   AS elevation,
       CASE
           WHEN peak_name IS NULL OR mountain_range IS NULL THEN '(no mountain)'
           ELSE mountain_range
           END                                  AS mountain
FROM ElevationRank
WHERE elevation_rank = 1
ORDER BY country_name ASC,
         elevation DESC;