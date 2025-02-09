UPDATE projects AS p
SET end_date = p.start_date + INTERVAL '5 months'
WHERE end_date IS NULL;

SELECT *
FROM projects;