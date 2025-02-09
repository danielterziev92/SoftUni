SELECT b.booking_id,
       b.starts_at::date,
       b.apartment_id,
       concat_ws(' ', c.first_name, c.last_name) as customer_name
FROM bookings as b
         RIGHT JOIN customers as c
                    USING (customer_id)
ORDER BY customer_name ASC
LIMIT 10;