all_number = []
number = input()
while number != 'Stop':
    current_number = int(number)
    all_number.append(current_number)
    number = input()
print(f'{min(all_number)}')