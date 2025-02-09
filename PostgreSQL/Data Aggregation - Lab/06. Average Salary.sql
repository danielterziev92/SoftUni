SELECT d.id          as department_id,
       avg(e.salary) as avg_salary
FROM departments as d
         JOIN employees as e on d.id = e.department_id
GROUP BY d.id
ORDER BY d.id
;