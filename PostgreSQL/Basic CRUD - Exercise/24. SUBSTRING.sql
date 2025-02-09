CREATE VIEW view_initials
AS
SELECT substring(first_name, 1, 2) as initial,
       last_name
FROM employees
ORDER BY last_name;