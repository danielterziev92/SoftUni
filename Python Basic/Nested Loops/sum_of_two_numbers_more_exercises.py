start_range = int(input())
end_range = int(input())
magic_number = int(input())
count = 0
for first_number in range(start_range, end_range+1):
    for second_number in range(start_range, end_range+1):
        count += 1
        if (first_number+second_number) == magic_number:
            print(f'Combination N:{count} ({first_number} + {second_number} = {magic_number})')
            exit()
print(f'{count} combinations - neither equals {magic_number}')