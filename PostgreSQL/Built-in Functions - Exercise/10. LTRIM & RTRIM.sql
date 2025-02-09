SELECT
    ltrim(peak_name, 'M') as "Left Trim",
    rtrim(peak_name, 'm') as "Right Trim"
FROM peaks;