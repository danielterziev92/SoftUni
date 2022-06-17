season = input()
kilo_for_mount = float(input())
price_for_kilo = 0
if season == 'Spring' or season == 'Autumn':
    if kilo_for_mount <= 5000:
        price_for_kilo = 0.75
    elif 5000 < kilo_for_mount <= 10000:
        price_for_kilo = 0.95
    elif 10000 < kilo_for_mount <= 20000:
        price_for_kilo = 1.45
elif season == 'Summer':
    if kilo_for_mount <= 5000:
        price_for_kilo = 0.90
    elif 5000 < kilo_for_mount <= 10000:
        price_for_kilo = 1.1
    elif 10000 < kilo_for_mount <= 20000:
        price_for_kilo = 1.45
elif season == 'Winter':
    if kilo_for_mount <= 5000:
        price_for_kilo = 1.05
    elif 5000 < kilo_for_mount <= 10000:
        price_for_kilo = 1.25
    elif 10000 < kilo_for_mount <= 20000:
        price_for_kilo = 1.45
total_amount = price_for_kilo * kilo_for_mount
taxs = 0.9
final_amount =( total_amount * 4 )* taxs
print(f'{final_amount:.2f}')