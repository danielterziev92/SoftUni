command = input()
count_command = 0
events = ['coding', 'dog', 'cat', 'movie']
while command != 'END':
    if command.lower() in events:
        if command.isupper():
            count_command += 2
        elif command.islower():
            count_command += 1
    command = input()
if count_command > 5:
    print('You need extra sleep')
else:
    print(count_command)