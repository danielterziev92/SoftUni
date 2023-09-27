SELECT substring(first_name, 1, 2) as initials,
       count('initials') as user_count
FROM users
GROUP BY initials
ORDER BY user_count DESC,
         initials ASC
;
