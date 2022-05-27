current_numbers = input().split(' ')
current_numbers = [int(current_numbers[numb]) for numb in range(len(current_numbers))]
print(f'The minimum number is {min(current_numbers)}')
print(f'The maximum number is {max(current_numbers)}')
print(f'The sum number is: {sum(current_numbers)}')
