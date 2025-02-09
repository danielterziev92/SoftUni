SELECT e.employee_id,
       concat_ws(' ', e.first_name, e.last_name) as full_name,
       d.department_id,
       d.name                                    as department_name
FROM employees as e
         RIGHT JOIN departments as d
                    ON e.employee_id = d.manager_id
ORDER BY employee_id
LIMIT 5;