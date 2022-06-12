commands = input()
courses = dict()
while commands != "end":
    commands = commands.split(" : ")
    course_name = commands[0]
    student_name = commands[1]
    if course_name not in courses.keys():
        courses[course_name] = list()
    courses[course_name].append(student_name)

    commands = input()
for course, list_of_student in courses.items():
    count_of_students = len(list_of_student)
    print(f"{course}: {count_of_students}")
    for student in list_of_student:
        print(f"-- {student}")
