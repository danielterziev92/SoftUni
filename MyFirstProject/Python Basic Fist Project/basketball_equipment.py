annual_training_fee = int(input())
basket_sneakers = annual_training_fee - (( 40 / 100 ) * annual_training_fee)
basket_outfit = basket_sneakers - (( 20 / 100 ) * basket_sneakers)
basket_ball = basket_outfit * (1 / 4)
basket_accessory = basket_ball * (1 / 5)
total_price = annual_training_fee + basket_sneakers + basket_outfit + basket_ball + basket_accessory
print(total_price)