SELECT count(*)
FROM countries
         LEFT JOIN mountains_countries
                   USING (country_code)
WHERE mountain_id IS NULL;