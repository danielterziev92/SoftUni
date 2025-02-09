SELECT concat_ws(' ', number, street) as "Address",
       city_id
FROM addresses
WHERE city_id % 2 = 0
ORDER BY city_id;