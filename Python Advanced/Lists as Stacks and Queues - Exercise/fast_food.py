from collections import deque
quality_food = int(input())
orders = deque(input().split())
orders = deque(map(int, orders))
max_order = 0
count = 0
is_serving = True
while orders:
    if count == len(orders):
        break
    order = orders[count]
    if order > max_order:
        max_order = order
    if (quality_food - order) >= 0 and is_serving:
        quality_food -= order
        orders.popleft()
        count = 0
    else:
        count += 1
        is_serving = False
print(max_order)
if orders:
    orders = list(map(str, orders))
    print(f"Orders left: {' '.join(orders)}")
else:
    print("Orders complete")
