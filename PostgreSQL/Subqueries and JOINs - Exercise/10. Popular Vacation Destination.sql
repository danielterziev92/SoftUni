SELECT country,
       count(country) AS booking_count
FROM apartments
         LEFT JOIN bookings
                   USING (apartment_id)
WHERE booked_at >= '2021-05-18 07:52:09.904+03'
  AND booked_at < '2021-09-17 19:48:02.147+03'
GROUP BY country
ORDER BY booking_count DESC;