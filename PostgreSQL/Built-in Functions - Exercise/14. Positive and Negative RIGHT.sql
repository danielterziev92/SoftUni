console_1SELECT peak_name,
       "right"(peak_name, 4) as "Positive Left",
       "right"(peak_name, -4) as "Negative Left"
FROM peaks;