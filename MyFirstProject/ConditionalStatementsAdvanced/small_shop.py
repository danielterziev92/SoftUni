product = input()
city = input()
qty = float(input())

class Product_Sofia:
    coffee = 0.5
    water = 0.8
    beer = 1.2
    sweets = 1.45
    peanuts = 1.6

class Product_Varna:
    coffee = 0.45
    water = 0.7
    beer = 1.10
    sweets = 1.35
    peanuts = 1.55

class Product_Plovdiv:
    coffee = 0.4
    water = 0.7
    beer = 1.15
    sweets = 1.30
    peanuts = 1.5

if city == 'Sofia':
    product = getattr(Product_Sofia, product)
    print(product * qty)
elif city == 'Plovdiv':
    product = getattr(Product_Plovdiv, product)
    print(product * qty)
elif city == 'Varna':
    product = getattr(Product_Varna, product)
    print(product * qty)