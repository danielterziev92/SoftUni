UPDATE countries
SET iso_code = upper(substring(country_name, 1, 3))
WHERE iso_code is null;