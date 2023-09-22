SELECT
    id,
    concat(first_name, ' ', last_name) as full_name,
    job_title,
    salary
FROM employees
WHERE salary > 1000
ORDER BY id;