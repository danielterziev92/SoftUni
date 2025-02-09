count_bottle = int(input())
total_amount_preparation = count_bottle * 750
plate = 5 # чиния
pot = 15 # тенджера
count = 1
count_court = ''
count_pot = 0
count_plate = 0
while total_amount_preparation >= 0:
    count_court = input()
    if count_court == 'End':
        break
    else:
        if count % 3 == 0:
            total_amount_preparation -= int(count_court) * pot
            count_pot += int(count_court)
            count += 1
        else:
            total_amount_preparation -= int(count_court) * plate
            count_plate += int(count_court)
            count += 1
if total_amount_preparation >= 0:
    print('Detergent was enough!')
    print(f'{count_plate} dishes and {count_pot} pots were washed.')
    print(f'Leftover detergent {total_amount_preparation} ml.')
else:
    print(f'Not enough detergent, {abs(total_amount_preparation)} ml. more necessary!')