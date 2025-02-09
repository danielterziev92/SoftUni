SELECT
    id as "ID",
    concat_ws(' ', first_name, last_name) as "Full Name",
    job_title as "Job Title"
FROM employees
ORDER BY first_name
LIMIT 50;