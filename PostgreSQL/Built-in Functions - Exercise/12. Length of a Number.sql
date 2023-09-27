SELECT population,
       length(population::varchar(20))
FROM countries;
-- BOTH ARE THE SAME

-- SELECT population,
--        length(cast(population as varchar(20)))
-- FROM countries;