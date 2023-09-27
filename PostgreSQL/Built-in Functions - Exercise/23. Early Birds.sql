-- WITH TimeDifferenceCTE AS (SELECT age(starts_at, booked_at) as time_diff,
--                                   user_id
--                            FROM bookings)
-- SELECT user_id,
--        concat(
--                extract(month FROM time_diff), ' mons ',
--                extract(day FROM time_diff), ' days ',
--                extract(hour FROM time_diff), ':',
--                extract(minute FROM time_diff), ':',
--                trunc(extract(second FROM time_diff), 3)
--            ) as "Early Birds"
-- FROM TimeDifferenceCTE
-- WHERE extract(month from time_diff) >= 10;

-- BOTH ARE THE SAME

SELECT
    user_id,
    age(starts_at, booked_at) as "Early Birds"
FROM
    bookings
WHERE
    starts_at - booked_at >= '10 months';

