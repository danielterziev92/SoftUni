number_of_orders = int(input())
total_amount = 0
for order in range(number_of_orders):
    price_per_capsule = float(input())
    days = int(input())
    capsules_per_day = int(input())
    if 0.01 <= price_per_capsule <= 100 and 1 <= days <= 31 and 1 <= capsules_per_day <= 2000:
        amount = price_per_capsule * days * capsules_per_day
        print(f'The price for the coffee is: ${amount:.2f}')
        total_amount += amount

print(f"Total: ${total_amount:.2f}")
