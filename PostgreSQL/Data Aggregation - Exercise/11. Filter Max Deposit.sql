SELECT magic_wand_creator,
       max(deposit_amount) as "Max Deposit Amount"
FROM wizard_deposits
WHERE deposit_amount not between 20000 and 40000
GROUP BY magic_wand_creator
ORDER BY "Max Deposit Amount" DESC
LIMIT 3;
