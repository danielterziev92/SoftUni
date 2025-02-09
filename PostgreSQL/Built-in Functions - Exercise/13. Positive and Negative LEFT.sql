SELECT peak_name,
       "left"(peak_name, 4) as "Positive Left",
       "left"(peak_name, -4) as "Negative Left"
FROM peaks;