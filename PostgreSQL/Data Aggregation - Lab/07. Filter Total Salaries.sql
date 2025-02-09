SELECT d.id          as department_id,
       sum(e.salary) as "Total Salary"
FROM departments as d
         JOIN employees as e on d.id = e.department_id

GROUP BY d.id
HAVING sum(e.salary) < 4200
ORDER BY d.id
;