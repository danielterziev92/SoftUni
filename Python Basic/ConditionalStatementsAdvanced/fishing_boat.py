budget = float(input())
current_season = input()
qty_people = int(input())
def Qty_People(qty_people, rent):
    if qty_people <= 6:
        rent *= 0.9
        return rent
    elif qty_people >= 7 and qty_people <= 11:
        rent *= 0.85
        return rent
    elif qty_people >= 12:
        rent *= 0.75
        return rent
if current_season == 'Spring': # пролет
    rent = 3000
    rent = Qty_People(qty_people, rent)
elif current_season == 'Summer' or current_season == 'Autumn': # Лято и Есен
    rent = 4200
    rent = Qty_People(qty_people, rent)
elif current_season == 'Winter': # Зима
    rent = 2600
    rent = Qty_People(qty_people, rent)
if qty_people % 2 == 0 and current_season != 'Autumn':
    rent *= 0.95
if budget >= rent:
    print(f'Yes! You have {abs(budget - rent):.2f} leva left.')
else:
    print(f'Not enough money! You need {rent - budget:.2f} leva.')