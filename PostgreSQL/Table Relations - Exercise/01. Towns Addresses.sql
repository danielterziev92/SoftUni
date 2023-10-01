SELECT a.town_id,
       t.name as town_name,
       a.address_text
FROM addresses as a
         LEFT JOIN towns as t
                   ON a.town_id = t.town_id
WHERE t.name IN ('San Francisco', 'Sofia', 'Carnation')
ORDER BY town_id ASC,
         address_id ASC;
