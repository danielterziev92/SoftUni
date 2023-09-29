SELECT CASE
           WHEN age between 0 and 10 THEN '[0-10]'
           WHEN age between 11 and 20 THEN '[11-20]'
           WHEN age between 21 and 30 THEN '[21-30]'
           WHEN age between 31 and 40 THEN '[31-40]'
           WHEN age between 41 and 50 THEN '[41-50]'
           WHEN age between 51 and 60 THEN '[51-60]'
           ELSE '[61+]'
           END as "Age Group",
       count(age) as count
FROM wizard_deposits
GROUP BY "Age Group"
ORDER BY "Age Group" ASC;
