SELECT
    id,
    concat_ws(' ', first_name, middle_name, last_name) as "Full Name",
    hire_date as "Hire Date"
FROM employees
ORDER BY hire_date
OFFSET 9;