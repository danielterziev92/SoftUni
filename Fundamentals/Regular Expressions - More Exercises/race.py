import re

participants = input().split(", ")
characters = dict()
for participant in participants:
    characters[participant] = 0
data = input()
while data != "end of race":

    character = re.finditer(r"(?P<char>[a-zA-Z])", data)
    current_char = list()
    for ch in character:
        current_char.append(ch.group("char"))
    name_of_char = "".join(current_char)
    current_distance = 0
    distance = re.finditer(r"(?P<km>[0-9])", data)
    for numb in distance:
        current_distance += int(numb.group('km'))
    if name_of_char in characters.keys():
        characters[name_of_char] += current_distance

    data = input()

winner_team = list()

place = 1
current_place = ""
for name, km in sorted(characters.items(), key=lambda kv: (-kv[1])):
    if place == 4:
        exit()
    if place == 1:
        current_place = "1st"
    elif place == 2:
        current_place = "2nd"
    elif place == 3:
        current_place = "3rd"
    print(f"{current_place} place: {name}")
    place += 1