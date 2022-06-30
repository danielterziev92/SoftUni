qty_protective_nylon = int(input())
qty_paint = int(input())
qty_paint_thinner = int(input())
qty_hours = int(input())
price_protective_nylon = 1.5
price_paint = 14.5
price_paint_thinner = 5
price_bag = 0.4
price_hours = 30 / 100
protective_nylon = ( qty_protective_nylon + 2 ) * price_protective_nylon
paint = ( qty_paint + qty_paint * (10 / 100)) * price_paint
paint_thinner = price_paint_thinner * qty_paint_thinner
amount_materials =protective_nylon + paint + paint_thinner + price_bag
amount_for_masters = amount_materials * price_hours * qty_hours
total_amount = amount_materials + amount_for_masters
print(total_amount)
