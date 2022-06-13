contests_and_pass = input()
contests = dict()
while contests_and_pass != "end of contests":
    contests_and_pass = contests_and_pass.split(":")
    contest = contests_and_pass[0]
    password = contests_and_pass[1]
    contests[contest] = password

    contests_and_pass = input()
commands = input()
users = dict()
while commands != "end of submissions":
    commands = commands.split("=>")
    contest = commands[0]
    password = commands[1]
    username = commands[2]
    points = int(commands[3])
    is_password_correct = False
    if contest in contests.keys():
        if password == contests[contest]:
            is_password_correct = True
    if is_password_correct:
        if username not in users.keys():
            users[username] = dict()
        if contest not in users[username]:
            users[username][contest] = points
        if points > users[username].get(contest):
            users[username][contest] = points

    commands = input()
last_total_points = 0
best_candidate = ""
for user in users.keys():
    total_points = 0
    for contest, points in users[user].items():
        total_points += points
    if total_points > last_total_points:
        last_total_points = total_points
        best_candidate = user
print(f"Best candidate is {best_candidate} with total {last_total_points} points.\nRanking:")
for user in sorted(users.keys()):
    print(f"{user}")
    for contest, points in sorted(users[user].items(), key=lambda kv: (kv[1], kv[0]), reverse=True):
        print(f"#  {contest} -> {points}")
