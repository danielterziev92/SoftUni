first_employee = int(input())
second_employee = int(input())
third_employee = int(input())
students_question = int(input())
total_answers_of_employee = first_employee + second_employee + third_employee
hours = 0
while students_question > 0:
    students_question -= total_answers_of_employee
    hours += 1
    if hours % 4 == 0:
        hours += 1
print(f'Time needed: {hours}h.')
