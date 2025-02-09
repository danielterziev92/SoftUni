SELECT deposit_group,
       sum(deposit_interest) as "Deposit Interest"
FROM wizard_deposits
GROUP BY deposit_group
ORDER BY "Deposit Interest" DESC;