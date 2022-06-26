count_day = int(input())
count_hours = int(input())
total_tax = 0
for all_day in range(1, count_day+1):
    tax = 0
    for all_hours in range(1, count_hours+1):
        if all_day % 2 == 0 and all_hours % 2 != 0:
            tax += 2.5
        elif all_day % 2 != 0 and all_hours % 2 == 0:
            tax += 1.25
        else:
            tax += 1
    print(f'Day: {all_day} - {tax:.2f} leva')
    total_tax += tax
print(f'Total: {total_tax:.2f} leva')