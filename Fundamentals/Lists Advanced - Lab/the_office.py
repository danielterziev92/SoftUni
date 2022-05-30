employees_happiness = list(map(int, input().split(' ')))
factor = int(input())
average_number = sum(employees_happiness) / len(employees_happiness)
count_employees_happiness = list(filter(lambda employee: employee > average_number, employees_happiness))
if len(count_employees_happiness) >= average_number:
    print(f'Score: {len(count_employees_happiness)}/{len(employees_happiness)}. Employees are happy!')
else:
    print(f'Score: {len(count_employees_happiness)}/{len(employees_happiness)}. Employees are not happy!')
