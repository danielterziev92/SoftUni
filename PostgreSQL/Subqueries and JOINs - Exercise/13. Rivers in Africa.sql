SELECT c.country_name,
       r.river_name
FROM countries_rivers as cr
         JOIN rivers as r
              ON cr.river_id = r.id
         RIGHT JOIN countries as c
                    USING (country_code)
WHERE c.continent_code = (SELECT DISTINCT continent_code
                          FROM continents
                          WHERE continent_name = 'Africa')
ORDER BY c.country_name ASC
LIMIT 5;

-- BOTH ARE THE SAME


-- SELECT c.country_name,
--        r.river_name
-- FROM countries_rivers as cr
--          JOIN rivers as r
--               ON cr.river_id = r.id
--          RIGHT JOIN countries as c
--                     USING (country_code)
-- WHERE c.continent_code = 'AF'
-- ORDER BY c.country_name ASC
-- LIMIT 5;