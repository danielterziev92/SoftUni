import operator
commands = input()
courses = dict()
while commands != "no more time":
    commands = commands.split(" -> ")
    username = commands[0]
    contest = commands[1]
    points = int(commands[2])
    if contest not in courses.keys():
        courses[contest] = dict()
    if username not in courses[contest].keys():
        courses[contest][username] = points
    else:
        if points > courses[contest][username]:
            courses[contest][username] = points

    commands = input()
ordered_courses = dict()
users = dict()
for course in courses.keys():
    ordered_courses[course] = dict()
    for user, points in sorted(courses[course].items(), key=operator.itemgetter(1), reverse=True):
        if points not in ordered_courses[course].keys():
            ordered_courses[course][points] = list()
        ordered_courses[course][points].append(user)
        if user not in users:
            users[user] = 0
        users[user] += points

ordered_users = dict()
for users, points in sorted(users.items(), key=operator.itemgetter(1), reverse=True):
    if points not in ordered_users.keys():
        ordered_users[points] = list()
    ordered_users[points].append(users)

for course in ordered_courses.keys():
    count_users = 0
    for users in ordered_courses[course].values():
        count_users += len(users)
    print(f"{course}: {count_users} participants")
    count = 1
    for points, users in ordered_courses[course].items():
        for user in sorted(users):
            print(f"{count}. {user} <::> {points}")
            count += 1

print(f"Individual standings:")
count = 1
for points in ordered_users.keys():
    for user in sorted(ordered_users[points]):
        print(f"{count}. {user} -> {points}")
        count += 1