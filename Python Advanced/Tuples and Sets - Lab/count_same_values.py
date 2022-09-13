# current_input = '-2.5 4 3 -2.5 -5.5 4 3 3 -2.5 3'
all_numbers = list(map(float, input().split()))
result = dict()
while all_numbers:
    current_numb = all_numbers[0]
    result[current_numb] = all_numbers.count(current_numb)
    all_numbers = [numb for numb in all_numbers if numb != current_numb]

for (numb, count) in result.items():
    print(f'{numb} - {count} times')
