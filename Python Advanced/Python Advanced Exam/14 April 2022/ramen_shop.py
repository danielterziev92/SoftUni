import sys
from io import StringIO

test1 = '''14, 25, 37, 43, 19
58, 23, 37'''

test2 = '''30, 13, 45
70, 25, 55, 15'''

test3 = '''30, 25
20, 35'''

sys.stdin = StringIO(test3)

from collections import deque

bowls_of_ramen = deque(map(int, input().split(', ')))
customers = deque(map(int, input().split(', ')))
while bowls_of_ramen and customers:
    ramen = bowls_of_ramen.pop()
    customer = customers.popleft()

    if ramen == customer:
        continue

    if ramen > customer:
        ramen -= customer
        bowls_of_ramen.append(ramen)
        continue

    if customer > ramen:
        customer -= ramen
        customers.appendleft(customer)

if not customers:
    bowls_of_ramen = list(map(str, bowls_of_ramen))
    print('Great job! You served all the customers.')
    if bowls_of_ramen:
        print(f'Bowls of ramen left: {", ".join(bowls_of_ramen)}')
else:
    customers = map(str, customers)
    print("Out of ramen! You didn't manage to serve all customers.")
    print(f'Customers left: {", ".join(customers)}')