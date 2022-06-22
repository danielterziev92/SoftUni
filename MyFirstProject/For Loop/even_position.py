numbers = int(input())
even_list = []
odd_list = []
for numbers in range(numbers):
    amount = float(input())
    if numbers % 2 == 0:
        odd_list.append(amount)
    else:
        even_list.append(amount)
print(f'OddSum={sum(odd_list):.2f},')
if min(odd_list or [0]) == 0:
    print(f'OddMin=No,')
else:
    min_odd = min(odd_list)
    print(f'OddMin={min_odd:.2f},')
if max(odd_list or [0]) == 0:
    print(f'OddMax=No,')
else:
    max_odd = max(odd_list)
    print(f'OddMax={max_odd:.2f},')
print(f'EvenSum={sum(even_list):.2f},')
if min(even_list or [0]) == 0:
    print(f'EvenMin=No,')
else:
    min_even = min(even_list)
    print(f'EvenMin={min_even:.2f},')
if max(even_list or [0]) == 0:
    print(f'EvenMax=No')
else:
    max_even = max(even_list)
    print(f'EvenMax={max_even:.2f}')