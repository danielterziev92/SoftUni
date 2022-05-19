number_of_orders = int(input())
total_amount = 0
for number in range(number_of_orders):
    price_capsule = float(input())
    days = int(input())
    count_capsule = int(input())
    amount = price_capsule * days * count_capsule
    print(f'The price for the coffee is: ${amount:.2f}')
    total_amount += amount
print(f'Total: ${total_amount:.2f}')