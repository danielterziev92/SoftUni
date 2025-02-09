fruit = input()
day_of_week = input()
qty = float(input())
working_day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
weekend_day = ['Saturday', 'Sunday']
all_fruits = ['banana', 'apple', 'orange', 'grapefruit', 'kiwi', 'pineapple', 'grapes']
class Working_day_price:
    banana = 2.5
    apple = 1.2
    orange = 0.85
    grapefruit = 1.45
    kiwi = 2.70
    pineapple = 5.5
    grapes = 3.85
class Weekend_day_price:
    banana = 2.7
    apple = 1.25
    orange = 0.90
    grapefruit = 1.60
    kiwi = 3
    pineapple = 5.6
    grapes = 4.20
if day_of_week in working_day and fruit in all_fruits:
    fruit = getattr(Working_day_price, fruit)
    total_price = fruit * qty
    print(f'{total_price:.2f}')
elif day_of_week in weekend_day and fruit in all_fruits:
    fruit = getattr(Weekend_day_price, fruit)
    total_price = fruit * qty
    print(f'{total_price:.2f}')
else:
    print('error')