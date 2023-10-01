SELECT min(avg_value)
FROM (SELECT avg(area_in_sq_km) as avg_value
      FROM countries
      GROUP BY continent_code) as a;
