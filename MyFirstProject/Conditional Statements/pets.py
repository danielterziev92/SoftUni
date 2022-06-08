import math
qty_day = int(input())
left_food = int(input())
food_for_dog = float(input())
food_for_cat = float(input())
food_for_turtle = float(input())
total_food_pet_eated = qty_day * food_for_dog + qty_day * food_for_cat + (qty_day * food_for_turtle)/1000
if left_food >= total_food_pet_eated:
    print(f'{math.floor(left_food-total_food_pet_eated)} kilos of food left.')
else:
    print(f'{math.ceil(total_food_pet_eated-left_food)} more kilos of food are needed.')