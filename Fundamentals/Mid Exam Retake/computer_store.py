command = input()
total_amount = 0
while command != 'special' and command != 'regular':
    current_money = float(command)
    if current_money <= 0:
        print('Invalid price!')
    else:
        total_amount += current_money
    command = input()
if total_amount > 0:
    tax = total_amount * 0.2
    final_price = tax + total_amount
    print(f"Congratulations you've just bought a new computer!")
    print(f'Price without taxes: {total_amount:.2f}$')
    print(f'Taxes: {tax:.2f}$')
    print(f'-----------')
    if command == 'special':
        final_price *= 0.9
        print(f'Total price: {final_price:.2f}$')
    else:
        print(f'Total price: {total_amount:.2f}$')
else:
    print(f'Invalid order!')
