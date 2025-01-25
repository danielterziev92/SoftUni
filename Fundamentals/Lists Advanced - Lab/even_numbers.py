all_numbers = input().split(', ')
all_numbers = list(map(int, all_numbers))
numbers_indices = [numb for numb in range(len(all_numbers)) if all_numbers[numb] % 2 == 0]
print(numbers_indices)