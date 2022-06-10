type_ticket = input()
rows = int(input())
columns = int(input())
premiere = 12
normal = 7.5
discount = 5
if type_ticket == 'Premiere':
    print(f'{rows * columns * premiere:.2f} leva')
elif type_ticket == 'Normal':
    print(f'{rows * columns * normal:.2f} leva')
elif type_ticket == 'Discount':
    print(f'{rows * columns * discount:.2f} leva')
