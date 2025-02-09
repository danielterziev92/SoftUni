SELECT
    first_name,
    last_name,
    extract(year from born) as year
FROM authors;