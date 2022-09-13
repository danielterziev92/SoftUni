students = dict()
for _ in range(int(input())):
    name, grade = input().split()
    if name not in students:
        students[name] = []
    students[name].append(float(grade))

for student, grades in students.items():
    avr_grade = sum(grades) / len(grades)
    print(f'{student} -> {" ".join(map(lambda x: f"{x:.2f}", grades))} (avg: {avr_grade:.2f})')
