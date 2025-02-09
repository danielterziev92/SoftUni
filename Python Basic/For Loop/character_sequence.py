age = int(input())
laundry = float(input())
toy_price = int(input())
money = []
toy = 0
for age in range(1, age+1):
    if age % 2 == 0:
        money.append(10*(age/2))
    else:
        toy += 1
toy_amount = toy * toy_price
all_money = sum(money) - (len(money) * 1)
total_amount = all_money + toy_amount
if total_amount >= laundry:
    print(f'Yes! {total_amount-laundry:.2f}')
else:
    print(f'No! {laundry - total_amount:.2f}')