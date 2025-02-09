CREATE TABLE bookings_calculation AS
SELECT booked_for,
       cast(booked_for * 50 as numeric) as multiplication,
       cast(booked_for % 50 as numeric) as modulo
FROM bookings
WHERE apartment_id = 93;