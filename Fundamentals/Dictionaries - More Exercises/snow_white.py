commands = input()
dwarf_info = dict()
while commands != "Once upon a time":
    commands = commands.split(" <:> ")
    name, hat_color, physics = commands[0], commands[1], int(commands[2])
    if hat_color not in dwarf_info.keys():
        dwarf_info[hat_color] = dict()
    if name not in dwarf_info[hat_color].keys():
        dwarf_info[hat_color][name] = 0
    if name in dwarf_info[hat_color]:
        if physics > dwarf_info[hat_color][name]:
            dwarf_info[hat_color][name] = physics

    commands = input()

sorted_dwarf_info = list()
for color in dwarf_info.keys():
    for name, physics in dwarf_info[color].items():
        total_count = len(dwarf_info[color].keys())
        sorted_dwarf_info.append([physics, total_count, {color: [name]}])

for data in sorted(sorted_dwarf_info, key=lambda kv: (-kv[0], -kv[1])):
    physics = data[0]
    for color, names in data[2].items():
        for name in names:
            print(f"({color}) {name} <-> {physics}")
