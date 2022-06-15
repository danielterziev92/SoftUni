type_flower = input()
flowers_quantity = int(input())
budget = int(input())
price = 0
if type_flower == "Roses":
    price = flowers_quantity * 5.00
    if flowers_quantity > 80:
        price = price * 0.90
if type_flower == "Dahlias":
    price = flowers_quantity * 3.80
    if flowers_quantity > 90:
        price = price * 0.85
if type_flower == "Tulips":
    price = flowers_quantity * 2.80
    if flowers_quantity > 80:
        price = price * 0.85
if type_flower == "Narcissus":
    price = flowers_quantity * 3.00
    if flowers_quantity < 120:
        price = price * 1.15
if type_flower == "Gladiolus":
    price = flowers_quantity * 2.50
    if flowers_quantity < 80:
        price = price * 1.20

diff = abs(price - budget)

if budget >= price:
    print(f"Hey, you have a great garden with {flowers_quantity} {type_flower} and {diff:.2f} leva left.")
else:
    print(f"Not enough money, you need {diff:.2f} leva more.")