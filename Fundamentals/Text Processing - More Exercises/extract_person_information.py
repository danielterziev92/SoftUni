import re
count = int(input())
for _ in range(count):
    data = input()
    name = re.finditer(r"[@](?P<name>\w+)[|]", data)
    age = re.finditer(r"[#](?P<age>\d+)[*]", data)
    for current_name in name:
        print(f"{current_name.group('name')} is ", end='')
    for current_age in age:
        print(f"{current_age.group('age')} years old.")