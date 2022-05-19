ornament_set_price = 2
tree_skirt_price = 5
tree_garlands_price = 3
tree_lights_price = 15
quantity = int(input())
remaining_days = int(input())
total_amount = 0
total_spirits = 0
for the_day in range(1, remaining_days + 1):
    if the_day % 11 == 0:
        quantity += 2
    if the_day % 2 == 0:
        total_amount += ornament_set_price * quantity
        total_spirits += 5
    if the_day % 3 == 0:
        total_amount += (tree_skirt_price + tree_garlands_price) * quantity
        total_spirits += 13
    if the_day % 5 == 0:
        total_amount += tree_lights_price * quantity
        total_spirits += 17
        if the_day % 3 == 0:
            total_spirits += 30
    if the_day % 10 == 0:
        total_spirits -= 20
        total_amount += tree_skirt_price + tree_garlands_price + tree_lights_price
if remaining_days % 10 == 0:
    total_spirits -= 30
print(f'Total cost: {total_amount}')
print(f'Total spirit: {total_spirits}')
