SELECT v.driver_id,
       v.vehicle_type,
       concat_ws(' ', c.first_name, c.last_name) as driver_name
FROM vehicles as v
         JOIN campers as c on v.driver_id = c.id;