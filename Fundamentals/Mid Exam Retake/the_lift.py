people_waiting = int(input())
all_seats_on_lift = list(map(int, input().split(' ')))
for wagon in range(len(all_seats_on_lift)):
    if all_seats_on_lift[wagon] <= 4:
        while all_seats_on_lift[wagon] != 4 and people_waiting > 0:
            all_seats_on_lift[wagon] += 1
            people_waiting -= 1
is_available_space = False
count_wagon = len(all_seats_on_lift)
for wagon in all_seats_on_lift:
    if wagon == 4:
        count_wagon -= 1
    if count_wagon == 0:
        is_available_space = True


if people_waiting == 0 and is_available_space:
    print(f'{" ".join([str(wagon) for wagon in all_seats_on_lift])}')
else:
    if people_waiting > 0:
        print(f"There isn't enough space! {people_waiting} people in a queue!")
        print(f"{' '.join([str(wagon) for wagon in all_seats_on_lift])}")
    else:
        print(f'The lift has empty spots!')
        print(f'{" ".join([str(wagon) for wagon in all_seats_on_lift])}')