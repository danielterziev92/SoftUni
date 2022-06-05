budget = float(input())
# Брой на статистите
extras = int(input())
# Цена за облекло на един статист
price_for_suit = float(input())
decor = budget * 0.1
if extras >= 150:
    amount_for_suit = extras * ( price_for_suit * 0.9 )
elif extras < 150:
    amount_for_suit = extras * price_for_suit
amount_for_movie = decor + amount_for_suit
final_budget = budget - amount_for_movie
if budget < amount_for_movie :
    print('Not enough money!')
    print(f'Wingard needs {abs(budget - amount_for_movie):.2f} leva more.')
else:
    print('Action!')
    print(f'Wingard starts filming with {abs(budget - amount_for_movie):.2f} leva left.')