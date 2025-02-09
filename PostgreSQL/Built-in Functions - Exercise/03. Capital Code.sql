ALTER TABLE countries
    ADD COLUMN capital_code char(2);

UPDATE countries
SET capital_code = substring(capital, 1, 2)
WHERE capital_code is null;

SELECT *
FROM countries;