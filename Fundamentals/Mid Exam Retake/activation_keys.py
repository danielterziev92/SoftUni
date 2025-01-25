activation_key = input()
commands = input()
while commands != "Generate":
    commands = commands.split(">>>")
    current_command = commands[0]
    if current_command == "Contains":
        substring = commands[1]
        if substring in activation_key:
            print(f"{activation_key} contains {substring}")
        else:
            print("Substring not found!")
    elif current_command == "Flip":
        command = commands[1]
        start_index = int(commands[2])
        end_index = int(commands[3])
        if command == "Upper":
            activation_key = activation_key[:start_index] + activation_key[start_index:end_index].upper() + \
                             activation_key[end_index:]
        elif command == "Lower":
            activation_key = activation_key[:start_index] + activation_key[start_index:end_index].lower() + \
                             activation_key[end_index:]
        print(activation_key)
    elif current_command == "Slice":
        start_index = int(commands[1])
        end_index = int(commands[2])
        activation_key = activation_key[0:start_index] + activation_key[end_index:]
        print(activation_key)

    commands = input()

print(f"Your activation key is: {activation_key}")