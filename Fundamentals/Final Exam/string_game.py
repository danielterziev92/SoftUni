text = input()
command = input()
while command != "Done":
    command = command.split(' ')
    current_command = command[0]
    if current_command == 'Change':
        char = command[1]
        replacement = command[2]
        text = text.replace(char, replacement)
        print(text)
    elif current_command == 'Includes':
        substring = command[1]
        if substring in text:
            print('True')
        else:
            print('False')
    elif current_command == 'End':
        substring = command[1]
        if text.endswith(substring):
            print(True)
        else:
            print(False)
    elif current_command == 'Uppercase':
        text = text.upper()
        print(text)
    elif current_command == 'FindIndex':
        char = command[1]
        index = text.index(char)
        print(index)
    elif current_command == 'Cut':
        start_index = int(command[1])
        end_index = start_index + int(command[2])
        result = text[start_index:end_index]
        print(result)
    command = input()
