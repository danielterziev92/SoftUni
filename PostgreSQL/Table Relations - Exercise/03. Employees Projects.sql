SELECT employee_id,
       concat_ws(' ', first_name, last_name),
       ep.project_id,
       p.name
FROM employees_projects as ep
         RIGHT JOIN employees as e
                    USING (employee_id)
         LEFT JOIN projects as p
                   USING (project_id)
WHERE project_id = 1;