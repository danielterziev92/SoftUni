SELECT capital,
       translate(capital, 'áãåçéíñóú', 'aaaceinou') as translated_name
FROM countries;