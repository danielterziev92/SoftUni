count = int(input())
students = dict()
for i in range(count):
    name = input()
    grade = float(input())
    if name not in students.keys():
        students[name] = list()
    students[name].append(grade)

for student, grade in students.items():
    average_grade = sum(grade)/len(grade)
    if average_grade >= 4.50:
        print(f"{student} -> {average_grade:.2f}")