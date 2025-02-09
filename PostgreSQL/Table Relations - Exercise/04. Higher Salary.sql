SELECT count(*)
FROM employees
WHERE employees.salary > (SELECT avg(salary)
                          FROM employees);