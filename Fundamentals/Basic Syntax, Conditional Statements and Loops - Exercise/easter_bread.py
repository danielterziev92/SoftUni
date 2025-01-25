budget = float(input())
flour_kilo_price = float(input())
pack_of_eggs_price = flour_kilo_price * 0.75
milk_price = (flour_kilo_price * 1.25)/4
price_for_bread = flour_kilo_price + milk_price + pack_of_eggs_price
count_colored_eggs = 0
count_bread = 0
while budget >= price_for_bread:
    budget -= price_for_bread
    count_bread += 1
    count_colored_eggs += 3
    if count_bread % 3 == 0:
        count_colored_eggs -= count_bread - 2
print(f'You made {count_bread} loaves of Easter bread! Now you have {count_colored_eggs} eggs and {budget:.2f}BGN left.')
