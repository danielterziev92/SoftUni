SELECT replace(mountain_range, 'a', '@') as replace_a,
       replace(mountain_range, 'A', '$') as replace_A
FROM mountains;