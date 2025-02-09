SELECT count(*) AS countries_without_rivers
FROM countries
         LEFT JOIN countries_rivers
                   ON countries.country_code = countries_rivers.country_code
WHERE countries_rivers.country_code IS NULL;