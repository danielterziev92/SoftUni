budget = float(input())
season = input()

if budget <= 100:
    desteny = 'Bulgaria'
    if season == 'summer':
        budget = budget*0.3
        type = 'Camp'
    elif season == 'winter':
        budget = budget*0.7
        type = 'Hotel'
elif 100 < budget <= 1000:
    desteny = "Balkans"
    if season == 'summer':
        budget = budget*0.4
        type = 'Camp'
    elif season == 'winter':
        budget = budget*0.8
        type = 'Hotel'
elif budget > 1000:
    desteny = "Europe"
    if season == 'summer':
        budget = budget*0.9
        type = 'Hotel'
    elif season == 'winter':
        budget = budget*0.9
        type = 'Hotel'


print(f'Somewhere in {desteny}')
print(f'{type} - {budget:.2f}')