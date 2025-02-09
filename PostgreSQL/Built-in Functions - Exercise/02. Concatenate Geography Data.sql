CREATE VIEW view_continents_countries_currencies_details
AS
SELECT concat_ws(': ', cont.continent_name, cont.continent_code)                          AS "Continent Details",
       concat_ws(' - ', countr.country_name, countr.capital, countr.area_in_sq_km, 'km2') AS "Country Information",
       concat(curr.description, ' (', curr.currency_code, ')')                            AS "Currencies"
FROM continents as cont
         JOIN countries as countr ON cont.continent_code = countr.continent_code
         JOIN currencies as curr ON countr.currency_code = curr.currency_code
ORDER BY "Country Information", "Currencies";