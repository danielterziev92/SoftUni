SELECT d.id as department_id,
       trunc(sum(e.salary), 2) as total_salaries
FROM departments as d
         JOIN employees as e on d.id = e.department_id
GROUP BY d.id
ORDER BY d.id
;