SELECT mountain_range,
       peak_name,
       elevation
FROM mountains
         JOIN peaks
              ON mountains.id = peaks.mountain_id
WHERE mountains.mountain_range LIKE '%Rila%'
ORDER BY elevation DESC;