password = input()
commands = input()
while commands != "Done":
    commands = commands.split(" ")
    current_command = commands[0]
    if current_command == "TakeOdd":
        password = "".join([password[i] for i in range(len(password)) if i % 2 != 0])
        print(password)
    elif current_command == "Cut":
        index = int(commands[1])
        length = int(commands[2])
        password = password[:index] + password[length+index:]
        print(password)
    elif current_command == "Substitute":
        substring = commands[1]
        substitute = commands[2]
        if substring in password:
            password = password.replace(substring, substitute)
            print(password)
        else:
            print("Nothing to replace!")

    commands = input()

print(f"Your password is: {password}")