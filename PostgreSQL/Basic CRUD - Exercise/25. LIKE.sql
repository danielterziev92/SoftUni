SELECT name,
       start_date
FROM projects
WHERE name like 'MOUNT%'
ORDER BY id;