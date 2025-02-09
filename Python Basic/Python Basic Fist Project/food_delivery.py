qty_chicken_menu = int(input())
qty_fish_menu = int(input())
qty_vegan_menu = int(input())
price_chicken_menu = 10.35
price_fish_menu = 12.40
price_vegan_menu = 8.15
price_delivery_price = 2.50
order_chicken_menu = qty_chicken_menu * price_chicken_menu
order_fish_menu = qty_fish_menu * price_fish_menu
order_vegan_menu = qty_vegan_menu * price_vegan_menu
amount_order = order_chicken_menu + order_fish_menu + order_vegan_menu
desert =( 20 / 100 ) * amount_order
total_amount = amount_order + desert + price_delivery_price
print(total_amount)