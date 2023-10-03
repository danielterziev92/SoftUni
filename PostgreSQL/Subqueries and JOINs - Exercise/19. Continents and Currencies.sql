CREATE VIEW continent_currency_usage
AS
SELECT continent_code,
       currency_code,
       count_currency AS currency_usage
FROM (SELECT continent_code,
             currency_code,
             COUNT(*)                                                               AS count_currency,
             DENSE_RANK() OVER (PARTITION BY continent_code ORDER BY COUNT(*) DESC) AS rank
      FROM countries
      WHERE currency_code IS NOT NULL
      GROUP BY continent_code, currency_code
      HAVING COUNT(*) > 1) as result
WHERE rank = 1
ORDER BY currency_usage DESC;