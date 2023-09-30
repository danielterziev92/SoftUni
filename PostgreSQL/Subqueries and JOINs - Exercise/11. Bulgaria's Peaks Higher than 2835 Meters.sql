SELECT mc.country_code,
       m.mountain_range,
       p.peak_name,
       p.elevation
FROM mountains_countries AS mc
         LEFT JOIN mountains as m
                   ON mc.mountain_id = m.id
         RIGHT JOIN peaks as p
                    ON mc.mountain_id = p.mountain_id
WHERE mc.country_code LIKE '%BG%'
  AND p.elevation > 2835
ORDER BY elevation DESC;
