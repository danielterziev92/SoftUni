information = input()
students_info = dict()
while not information[0].islower():
    information = information.split(":")
    course = information[2]
    student_id = information[1]
    name = information[0]
    if course in students_info.keys():
        students_info[course][student_id] = name
    else:
        students_info[course] = {student_id: name}

    information = input()

course_info = information.replace("_", " ")
for student_id, student in students_info[course_info].items():
    print(f"{student} - {int(student_id)}")