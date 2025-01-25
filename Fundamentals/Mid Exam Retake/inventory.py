journal = input().split(", ")
commands = input()
while commands != "Craft!":
    commands = commands.split(" - ")
    current_command = commands[0]
    if current_command == "Collect":
        item = commands[1]
        if item not in journal:
            journal.append(item)
    elif current_command == "Drop":
        item = commands[1]
        if item in journal:
            journal.remove(item)
    elif current_command == "Combine Items":
        items = commands[1].split(":")
        old_item = items[0]
        new_item = items[1]
        if old_item in journal:
            index_old_item = journal.index(old_item)
            journal.insert(index_old_item+1, new_item)
    elif current_command == "Renew":
        item = commands[1]
        if item in journal:
            journal.pop(journal.index(item))
            journal.append(item)

    commands = input()
print(", ".join(journal))