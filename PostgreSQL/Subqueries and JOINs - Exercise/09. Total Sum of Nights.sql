SELECT a.name,
       sum(b.booked_for)
FROM apartments as a
         RIGHT JOIN bookings as b
                    USING (apartment_id)
GROUP BY a.name
HAVING a.name IS NOT NULL
ORDER BY a.name ASC;