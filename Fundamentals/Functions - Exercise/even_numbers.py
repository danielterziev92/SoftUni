all_numbers = input().split(' ')
all_numbers = [ int(all_numbers[numb]) for numb in range(len(all_numbers))]
print(list(filter(lambda x: (x % 2 == 0), all_numbers)))
