all_numbers = input().split()
target_numb = int(input())
unique_pairs = set()
iteration = 0
for i in range(len(all_numbers)):
    value = int(all_numbers[i])
    for i2 in range(i + 1, len(all_numbers)):
        value2 = int(all_numbers[i2])
        if value + value2 == target_numb:
            print(f'{value} + {value2} = {target_numb}')
            unique_pairs.add((value, value2))
        iteration += 1
print(f'Iterations done: {iteration}')
[print(pair) for pair in unique_pairs]