SELECT b.booking_id,
       a.name                                    as apartment_owner,
       a.apartment_id,
       concat_ws(' ', c.first_name, c.last_name) as customer_name
FROM bookings as b
         FULL JOIN apartments as a
                   USING (booking_id)
         FULL JOIN customers as c
                   USING (customer_id)

ORDER BY b.booking_id ASC,
         apartment_owner ASC,
         customer_name ASC;