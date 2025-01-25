destination = input()
command = input()
while command != 'Travel':
    command = command.split(':')
    if command[0] == 'Add Stop':
        index = int(command[1])
        the_string = command[2]
        if index < len(destination):
            destination = destination[:index] + the_string + destination[index:]
    elif command[0] == "Remove Stop":
        start_index = int(command[1])
        end_index = int(command[2])
        if start_index <= end_index < len(destination):
            destination = destination[:start_index] + destination[end_index+1:]
    elif command[0] == "Switch":
        old_string = command[1]
        new_string = command[2]
        if old_string in destination:
            destination = destination.replace(old_string, new_string)
    print(destination)
    command = input()

print(f"Ready for world tour! Planned stops: {destination}")