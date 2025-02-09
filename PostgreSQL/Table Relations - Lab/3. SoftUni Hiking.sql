SELECT r.start_point,
       r.end_point,
       r.leader_id,
       concat_ws(' ', c.first_name, c.last_name) as leader_name
FROM routes as r
         JOIN campers as c on r.leader_id = c.id;