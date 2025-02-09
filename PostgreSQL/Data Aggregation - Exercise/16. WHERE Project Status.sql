SELECT project_name,
       CASE
           WHEN start_date IS NULL AND end_date IS NULL THEN 'Ready for development'
           WHEN start_date IS NOT NULL and end_date IS NULL THEN 'In Progress'
           ELSE 'Done'
           END as project_status
FROM projects
WHERE project_name LIKE '%Mountain%';