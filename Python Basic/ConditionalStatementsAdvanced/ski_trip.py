days_for_stay = int(input())
type_of_room = input()
evaluation = input()
class Price_for_room:
    room_for_one_person = 18
    apartment = 25
    president_apartment = 35
    if days_for_stay < 10:
        apartment *= 0.7
        president_apartment *= 0.9
    elif days_for_stay >=10 and days_for_stay <= 15:
        apartment *= 0.65
        president_apartment *= 0.85
    else:
        apartment *= 0.5
        president_apartment *= 0.8

price_for_room = getattr(Price_for_room, type_of_room.replace(' ','_'))
days_for_stay = days_for_stay - 1
if evaluation == 'positive':
    price_for_room *= 1.25
elif evaluation == 'negative':
    price_for_room *= 0.9
total_amount = price_for_room * days_for_stay
print(f'{total_amount:.2f}')