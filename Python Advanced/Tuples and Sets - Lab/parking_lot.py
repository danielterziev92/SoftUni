count = int(input())
parking = set()
for _ in range(count):
    direction, car_number = input().split(', ')
    if direction == 'IN':
        parking.add(car_number)
    else:
        if car_number in parking:
            parking.remove(car_number)

if parking:
    print('\n'.join(parking))
else:
    print('Parking Lot is Empty')
