SELECT booking_id,
       first_name as customer_name
FROM bookings
         CROSS JOIN customers
ORDER BY customer_name;