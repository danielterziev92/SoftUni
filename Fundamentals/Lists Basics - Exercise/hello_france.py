items = input().split('|')
budget = float(input())
price_for_train = 150
all_buy_items = []
budget_of_sells_item = 0
profit =  0
for i in range(len(items)):
    all_values = items[i].split('->')
    type_of_item = all_values[0]
    price = float(all_values[1])
    if type_of_item == 'Clothes' and price <= 50 and budget >= price:
        budget -= price
        all_buy_items.append(price)
    elif type_of_item == 'Shoes' and price <= 35 and budget >= price:
        budget -= price
        all_buy_items.append(price)
    elif type_of_item == 'Accessories' and price <= 20.50 and budget >= price:
        budget -= price
        all_buy_items.append(price)
for i in range(len(all_buy_items)-1):
    new_price = all_buy_items[i]*1.4
    profit += new_price - all_buy_items[i]
    print(f'{new_price:.2f}', end=' ')
    budget_of_sells_item += new_price
new_price = all_buy_items[-1]*1.4
budget_of_sells_item += new_price
profit += new_price - all_buy_items[-1]
print(f'{new_price:.2f}')
print(f'Profit: {profit:.2f}')
new_budget = budget_of_sells_item + budget
if new_budget >= price_for_train:
    print('Hello, France!')
else:
    print('Not enough money.')