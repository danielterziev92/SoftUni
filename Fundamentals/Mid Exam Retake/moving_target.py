targets = input().split(" ")
targets = list(map(int, targets))
commands = input()
while commands != 'End':
    commands = commands.split(' ')
    command = commands[0]
    if command == "Shoot":
        index = int(commands[1])
        power = int(commands[2])
        if 0 <= index < len(targets):
            targets[index] -= power
            if targets[index] <= 0:
                targets.pop(index)
    elif command == "Add":
        index = int(commands[1])
        value = int(commands[2])
        if 0 <= index < len(targets):
            targets.insert(index, value)
        else:
            print("Invalid placement!")
    elif command == "Strike":
        index = int(commands[1])
        radius = int(commands[2])
        index_before = index - radius
        index_after = index + radius
        if 0 <= index_before < index_after < len(targets):
            targets[index_before:index_after+1] = ''
        else:
            print("Strike missed!")
    commands = input()

targets = list(map(str, targets))
print('|'.join(targets))