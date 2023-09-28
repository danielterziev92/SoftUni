SELECT d.id as depaertment_id,
       count(e.id)
FROM departments as d
         JOIN employees as e
              ON d.id = e.department_id
GROUP BY d.id
ORDER BY d.id
;