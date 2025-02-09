SELECT concat_ws(' ', a.address, a.address_2) as apartment_address,
       b.booked_for                           as nights
FROM apartments as a
         JOIN bookings as b
              USING (booking_id)
ORDER BY a.apartment_id ASC;