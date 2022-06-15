number_1 = int(input())
number_2 = int(input())
operation = input()
def Even_or_Odd(amount):
    if amount % 2 == 0:
        even_or_odd = 'even'
        return  even_or_odd
    else:
        even_or_odd = 'odd'
        return even_or_odd
if operation == '+':
    amount = number_1 + number_2
    even_or_odd = Even_or_Odd(amount)
    print(f'{number_1} {operation} {number_2} = {amount} - {even_or_odd}')
elif operation == '-':
    amount = number_1 - number_2
    even_or_odd = Even_or_Odd(amount)
    print(f'{number_1} {operation} {number_2} = {amount} - {even_or_odd}')
elif operation == '*':
    amount = number_1 * number_2
    even_or_odd = Even_or_Odd(amount)
    print(f'{number_1} {operation} {number_2} = {amount} - {even_or_odd}')
elif operation == '/':
    if number_2 == 0:
        print(f'Cannot divide {number_1} by zero')
    else:
        print(f'{number_1} / {number_2} = {number_1/number_2:.2f}')
elif operation == '%':
    if number_2 == 0:
        print(f'Cannot divide {number_1} by zero')
    else:
        print(f'{number_1} % {number_2} = {number_1%number_2}')