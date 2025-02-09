SELECT magic_wand_creator,
       min(magic_wand_size) as "Minimum Wand Size"
FROM wizard_deposits
GROUP BY magic_wand_creator
ORDER BY "Minimum Wand Size" ASC
LIMIT 5;