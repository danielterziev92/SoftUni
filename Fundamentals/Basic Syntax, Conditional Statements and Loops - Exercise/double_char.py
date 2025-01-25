current_string = input()
while current_string != 'End':
    if current_string != 'SoftUni':
        print(''.join([char*2 for char in current_string]))
    current_string = input()
