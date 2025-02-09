# Скумрия
mackerel_price = float(input())
# Цаца
sprat_price = float(input())
# Паламуд
bonito_kg = float(input())
# Сафрид
sagrid_kg = float(input())
# миди
mussels_kg = int(input())
bonito_price = mackerel_price * 1.6
sagrid_price = sprat_price * 1.8
mussels_price = 7.5
total_price = bonito_price * bonito_kg + sagrid_price * sagrid_kg + mussels_price * mussels_kg
print(f'{total_price:.2f}')