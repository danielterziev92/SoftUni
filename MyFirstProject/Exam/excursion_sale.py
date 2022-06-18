count_excursions_sea = int(input())
count_excursions_mountain = int(input())
name_packet = input()
profit = 0
while name_packet != 'Stop':
    if name_packet == 'sea' and count_excursions_sea > 0:
        profit += 680
        count_excursions_sea -= 1
    elif name_packet == 'mountain' and count_excursions_mountain > 0:
        profit += 499
        count_excursions_mountain -= 1
    if count_excursions_sea == 0 and count_excursions_mountain == 0:
        print(f'Good job! Everything is sold.')
        break
    else:
        name_packet = input()
print(f'Profit: {profit} leva.')