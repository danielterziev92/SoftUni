import math

qty_magnolias = int(input())
qty_hyacinths = int(input())
qty_rose = int(input())
qty_cacti = int(input())
price_for_present = float(input())
magnolias = 3.25 # Магнолии
hyacinths = 4 # Зюмбюли
rose =  3.5 # Рози
cacti = 8 # Кактуси
sum_order = qty_magnolias * magnolias + qty_hyacinths * hyacinths + qty_rose * rose + qty_cacti * cacti
tax = sum_order * 0.05
total_amount = sum_order - tax
if price_for_present <= total_amount:
    print(f'She is left with {math.floor(total_amount -price_for_present)} leva.')
else:
    print(f'She will have to borrow {math.ceil(price_for_present - total_amount)} leva.')