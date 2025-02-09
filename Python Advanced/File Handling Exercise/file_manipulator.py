import os
import sys
from io import StringIO

test1 = '''Create-file.txt
Add-file.txt-First Line
Add-file.txt-Second Line
Replace-random.txt-Some-some
Replace-file.txt-First-1st
Replace-file.txt-Second-2nd
Delete-random.txt
Delete-file.txt
End'''

sys.stdin = StringIO(test1)

while True:
    commands = input()
    if commands == 'End':
        break

    commands = commands.split('-')
    command, file_name = commands[0], commands[1]

    if command == 'Create':
        with open(f'./{file_name}', 'w') as file:
            file.write('')
    elif command == 'Add':
        content = commands[2]
        with open(f'./{file_name}', 'a') as file:
            file.write(content + '\n')
    elif command == 'Replace':
        old_string, new_string = commands[2], commands[3]
        try:
            with open(f'{file_name}', 'r') as file, open(f'{file_name}', 'w') as new_file:
                old_text = file.read()
                new_text = old_text.replace(old_string, new_string)
                new_file.write(new_text)
        except FileNotFoundError:
            print('An error occurred')
    elif command == 'Delete':
        try:
            os.remove(file_name)
        except FileNotFoundError:
            print('An error occurred')