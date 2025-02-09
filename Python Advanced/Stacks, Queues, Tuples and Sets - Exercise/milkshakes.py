import sys
from io import StringIO

test1 = '''20, 24, -5, 17, 22, 60, 26
26, 60, 22, 17, 24, 10, 55'''
test2 = '''-10, -2, -30, 10
-5'''
test3 = '''2, 3, 3, 7, 2
2, 7, 3, 3, 2, 14, 6'''
test4 = '''5, 7, 8, 9, 10
3, 2, 1, 10, 5'''

sys.stdin = StringIO(test4)

from collections import deque

chocolates = list(map(int, input().split(', ')))
cups_of_milk = deque(map(int, input().split(', ')))
milkshake = 0
while milkshake < 5 and chocolates and cups_of_milk:

    chocolate_cup = chocolates.pop()
    milk_cup = cups_of_milk.popleft()

    if chocolate_cup <= 0 and milk_cup <= 0:
        continue
    elif chocolate_cup <= 0:
        cups_of_milk.appendleft(milk_cup)
        continue
    elif milk_cup <= 0:
        chocolates.append(chocolate_cup)
        continue

    if chocolate_cup != milk_cup:
        chocolates.append(chocolate_cup - 5)
        cups_of_milk.append(milk_cup)
    else:
        milkshake += 1

if milkshake < 5:
    print('Not enough milkshakes.')
else:
    print('Great! You made all the chocolate milkshakes needed!')
if chocolates:
    print(f'Chocolate: {", ".join(map(str, chocolates))}')
else:
    print('Chocolate: empty')
if cups_of_milk:
    print(f'Milk: {", ".join(map(str, cups_of_milk))}')
else:
    print('Milk: empty')