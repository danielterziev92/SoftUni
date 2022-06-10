count_junior_cyclists = int(input())
count_senior_cyclists = int(input())
type_of_route = input()
if type_of_route == 'trail':
    junior_cyclists = 5.5
    senior_cyclists = 7
elif type_of_route == 'cross-country':
    junior_cyclists = 8
    senior_cyclists = 9.5
elif type_of_route == 'downhill':
    junior_cyclists = 12.25
    senior_cyclists = 13.75
elif type_of_route == 'road':
    junior_cyclists = 20
    senior_cyclists = 21.50
total_count_cyclists = count_senior_cyclists + count_junior_cyclists
if total_count_cyclists >= 50 and type_of_route == 'cross-country':
    junior_cyclists *= 0.75
    senior_cyclists *= 0.75
total_amount = count_senior_cyclists * senior_cyclists + count_junior_cyclists * junior_cyclists
costs = total_amount * 0.05
amount_donated = total_amount - costs
print(f'{amount_donated:.2f}')