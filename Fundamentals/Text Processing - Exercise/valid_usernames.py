data = input().split(", ")
usernames = list()
for user in data:
    if 3 <= len(user) <= 16 and (user.isalnum() or "-" in user or "_" in user):
        usernames.append(user)

for user in usernames:
    print(user)
