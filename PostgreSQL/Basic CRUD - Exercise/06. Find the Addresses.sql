SELECT
    id,
    concat_ws(' ', number, street) as "Address",
    city_id
FROM addresses
WHERE id >= 20;