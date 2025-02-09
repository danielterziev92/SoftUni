SELECT department_id,
       count(department_id) AS num_employees,
       CASE
           WHEN avg(salary) > 50000 THEN 'Above average'
           WHEN avg(salary) <= 50000 THEN 'Below average'
           END
FROM employees
GROUP BY department_id
HAVING avg(salary) > 30000
ORDER BY department_id;