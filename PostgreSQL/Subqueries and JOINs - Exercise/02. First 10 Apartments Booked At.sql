SELECT a.name,
       a.country,
       b.booked_at::date
FROM apartments as a
         LEFT JOIN bookings as b
                   USING (booking_id)
LIMIT 10;