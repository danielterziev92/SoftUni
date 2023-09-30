SELECT booking_id,
       apartment_id,
       companion_full_name
FROM bookings
         JOIN customers
              USING (customer_id)
WHERE apartment_id IS NULL;