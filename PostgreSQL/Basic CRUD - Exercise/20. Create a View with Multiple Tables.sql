CREATE VIEW view_addresses
AS
SELECT concat_ws(' ', e.first_name, e.last_name) AS "Full Name",
       e.department_id,
       concat_ws(' ', a.number, a.street)        AS "Address"
FROM employees as e
         JOIN addresses as a
              ON e.address_id = a.id
ORDER BY "Address";