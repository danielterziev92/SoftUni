-- SELECT (SELECT count(*) FROM employees WHERE department_id = 1) as "Engineering",
--        (SELECT count(*) FROM employees WHERE department_id = 2) as "Tool Design",
--        (SELECT count(*) FROM employees WHERE department_id = 3) as "Sales",
--        (SELECT count(*) FROM employees WHERE department_id = 4) as "Marketing",
--        (SELECT count(*) FROM employees WHERE department_id = 5) as "Purchasing",
--        (SELECT count(*) FROM employees WHERE department_id = 6) as "Research and Development",
--        (SELECT count(*) FROM employees WHERE department_id = 7) as "Production"

-- BOTH ARE THE SAME

SELECT count(CASE WHEN department_id = 1 THEN 1 END) as "Engineering",
       count(CASE WHEN department_id = 2 THEN 1 END) as "Tool Design",
       count(CASE WHEN department_id = 3 THEN 1 END) as "Sales",
       count(CASE WHEN department_id = 4 THEN 1 END) as "Marketing",
       count(CASE WHEN department_id = 5 THEN 1 END) as "Purchasing",
       count(CASE WHEN department_id = 6 THEN 1 END) as "Research and Development",
       count(CASE WHEN department_id = 7 THEN 1 END) as "Production"
FROM employees;