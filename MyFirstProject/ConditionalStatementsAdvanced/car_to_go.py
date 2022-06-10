budget = float(input())
season = input()
car = ''
car_cost = 0
class_of_car = ''
if budget <= 100 :
    class_of_car = 'Economy class'
    if season == 'Summer':
        car = 'Cabrio'
        car_cost = budget * 0.35
    elif season == 'Winter':
        car = 'Jeep'
        car_cost = budget * 0.65
elif 100 < budget <= 500:
    class_of_car = 'Compact class'
    if season == 'Summer':
        car = 'Cabrio'
        car_cost = budget * 0.45
    elif season == 'Winter':
        car = 'Jeep'
        car_cost = budget * 0.8
elif budget > 500:
    class_of_car = 'Luxury class'
    car = 'Jeep'
    car_cost = budget * 0.9

print(class_of_car)
print(f'{car} - {car_cost:.2f}')
