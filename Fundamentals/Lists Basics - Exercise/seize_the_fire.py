level_of_fire = input().split('#')
amount_of_water = int(input())
total_fire = 0
efforts = 0
print(f'Cells:')
for i in range(len(level_of_fire)):
    current_level_of_fire = level_of_fire[i].split(' = ')
    current_level = current_level_of_fire[0]
    number_of_fire = int(current_level_of_fire[1])
    if current_level == 'High' and 81 <= number_of_fire <= 125 and amount_of_water >= number_of_fire:
        amount_of_water -= number_of_fire
        efforts += (number_of_fire*0.25)
        total_fire += number_of_fire
        print(f' - {number_of_fire}')
    elif current_level == 'Medium' and 51 <= number_of_fire <= 80 and amount_of_water >= number_of_fire:
        amount_of_water -= number_of_fire
        efforts += (number_of_fire*0.25)
        total_fire += number_of_fire
        print(f' - {number_of_fire}')
    elif current_level == 'Low' and 1 <= number_of_fire <= 50 and amount_of_water >= number_of_fire:
        amount_of_water -= number_of_fire
        efforts += (number_of_fire*0.25)
        total_fire += number_of_fire
        print(f' - {number_of_fire}')
print(f'Effort: {efforts:.2f}')
print(f'Total Fire: {total_fire:.0f}')