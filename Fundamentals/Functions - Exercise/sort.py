all_numbers = input().split(' ')
all_numbers = [int(all_numbers[numb]) for numb in range(len(all_numbers))]
print(sorted(all_numbers))