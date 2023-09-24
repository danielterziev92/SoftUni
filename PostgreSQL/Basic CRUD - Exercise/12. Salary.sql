SELECT concat_ws(' ', first_name, last_name) as "Full Name",
       job_title,
       salary
FROM employees
WHERE salary = 12500
   OR salary = 14000
   OR salary = 23600
   OR salary = 25000
ORDER BY salary DESC;