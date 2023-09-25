SELECT replace(title, 'The', '***')
FROM books
WHERE substring(title, 1, 3) = 'The';