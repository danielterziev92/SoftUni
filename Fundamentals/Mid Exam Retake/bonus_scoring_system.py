number_of_student = int(input())
number_of_lecture = int(input())
additional_bonus = int(input())
students_bonuses = list()
students_attendances = list()
for student in range(number_of_student):
    attendances_of_student = int(input())
    bonus = round((attendances_of_student / number_of_lecture) * (5 + additional_bonus))
    students_bonuses.append(bonus)
    students_attendances.append(attendances_of_student)

student_index = students_bonuses.index(max(students_bonuses))
print(f"Max Bonus: {students_bonuses[student_index]}.")
print(f"The student has attended {students_attendances[student_index]} lectures.")