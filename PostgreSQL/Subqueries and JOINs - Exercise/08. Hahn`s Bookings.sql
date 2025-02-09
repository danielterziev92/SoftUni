SELECT count(*)
FROM bookings as b
         LEFT JOIN customers as c
                   USING (customer_id)
WHERE c.last_name LIKE 'Hahn';