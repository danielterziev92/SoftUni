SELECT mc.country_code,
       count(mountain_range) as mountain_range_count
FROM mountains as m
         LEFT JOIN mountains_countries as mc
                   ON m.id = mc.mountain_id
WHERE mc.country_code IN ('BG', 'RU', 'US')
GROUP BY mc.country_code
ORDER BY mountain_range_count DESC;
