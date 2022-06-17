budget = float(input())
season = input()
accommodation = ''
accommodation_loction = ''
holiday_cost = 0
if budget <= 1000:
    accommodation = 'Camp'
    if season == 'Summer':
        accommodation_loction = 'Alaska'
        holiday_cost = budget * 0.65
    elif season == 'Winter':
        accommodation_loction = 'Morocco'
        holiday_cost = budget * 0.45
elif 1000 < budget <= 3000:
    accommodation = 'Hut'
    if season == 'Summer':
        accommodation_loction = 'Alaska'
        holiday_cost = budget * 0.8
    elif season == 'Winter':
        accommodation_loction = 'Morocco'
        holiday_cost = budget * 0.60
elif budget > 3000:
    accommodation = 'Hotel'
    holiday_cost = budget * 0.9
    if season == 'Summer':
        accommodation_loction = 'Alaska'
    elif season == 'Winter':
        accommodation_loction = 'Morocco'
minus = '-'
print(f'{accommodation_loction} {minus} {accommodation} {minus} {holiday_cost:.2f}')
