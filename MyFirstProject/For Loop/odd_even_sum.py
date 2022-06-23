input_number = int(input())
row_number = input_number
all_even_numbers=[]
all_odd_numbers=[]
for input_number in range(input_number):
    add_numbers = int(input())
    if input_number % 2 == 0:
        all_even_numbers.append(int(add_numbers))
    else:
        all_odd_numbers.append(int(add_numbers))
amount_even = sum(all_even_numbers)
amount_odd = sum(all_odd_numbers)
if amount_even == amount_odd:
    print('Yes')
    print(f'Sum = {amount_even}')
else:
    print('No')
    if amount_even > amount_odd:
        print(f'Diff = {amount_even - amount_odd}')
    else:
        print(f'Diff = {amount_odd - amount_even}')