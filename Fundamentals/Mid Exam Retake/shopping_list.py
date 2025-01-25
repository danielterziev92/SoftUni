groceries = input().split("!")
commands = input()
while commands != "Go Shopping!":
    commands = commands.split(" ")
    current_command = commands[0]
    if current_command == "Urgent":
        item = commands[1]
        if item not in groceries:
            groceries.insert(0, item)
    elif current_command == "Unnecessary":
        item = commands[1]
        if item in groceries:
            groceries.remove(item)
    elif current_command == "Correct":
        old_item = commands[1]
        new_item = commands[2]
        if old_item in groceries:
            groceries[groceries.index(old_item)] = new_item
    elif current_command == "Rearrange":
        item = commands[1]
        if item in groceries:
            index = groceries.index(item)
            groceries.pop(index)
            groceries.append(item)
    commands = input()
output = ", ".join(groceries)
print(output)