import math

area = int(input()) # Лозе с площ X квадратни метри
graypes_kg = float(input()) # Килограма грозде
wanted_wine = int(input()) # Желаното количество вино
workers = int(input()) # Работниците на лозето
total_graypes_from_area = area * graypes_kg # Количеството грозде което може да се изкра от кв. метри
total_wine = (total_graypes_from_area * 0.4) / 2.5 # Първо 40 % от цялата реколта отива за вино и след това 2.5 кг отиват за 1 литър вино
if total_wine >= wanted_wine:
    left_wine = total_wine - wanted_wine
    print(f'Good harvest this year! Total wine: {math.floor(total_wine)} liters.')
    print(f'{math.ceil(left_wine)} liters left -> {math.ceil(left_wine/workers)} liters per person.')
elif wanted_wine > total_wine:
    left_wine = wanted_wine - total_wine
    print(f'It will be a tough winter! More {math.floor(left_wine)} liters wine needed.')