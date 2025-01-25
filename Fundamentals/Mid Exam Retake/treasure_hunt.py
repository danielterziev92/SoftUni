treasure_chest = input().split("|")
commands = input()
while commands != 'Yohoho!':
    commands = commands.split(" ")
    current_command = commands[0]
    if current_command == "Loot":
        commands.pop(0)
        for item in commands:
            if item not in treasure_chest:
                treasure_chest.insert(0, item)
    elif current_command == "Drop":
        index = int(commands[1])
        if index < len(treasure_chest):
            treasure_item = treasure_chest.pop(index)
            treasure_chest.append(treasure_item)
    elif current_command == "Steal":
        count = int(commands[1])
        steal_item = treasure_chest[-count:]
        treasure_chest[-count:] = ''
        print(", ".join(steal_item))


    commands = input()

treasure_length_items = 0
for item in treasure_chest:
    treasure_length_items += len(item)

if treasure_chest:
    average_treasure_gain = treasure_length_items / len(treasure_chest)
    print(f"Average treasure gain: {average_treasure_gain:.2f} pirate credits.")
else:
    print(f"Failed treasure hunt.")