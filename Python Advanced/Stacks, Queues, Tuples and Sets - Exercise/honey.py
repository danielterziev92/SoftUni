import sys
from io import StringIO

test1 = '''20 62 99 35 0 150
120 60 10 1 70 10
+ - + + / * - - /'''
test2 = '''30
15 9 5 150 8
* + + * -'''

sys.stdin = StringIO(test2)

from collections import deque

working_bees = deque(map(int, input().split()))
nectar_collection = list(map(int, input().split()))
symbols_sequence = deque(input().split())
operations = {
    '+': lambda a, b: a + b,
    '-': lambda a, b: a - b,
    '*': lambda a, b: a * b,
    '/': lambda a, b: a / b,
}
total_honey = 0
while working_bees and nectar_collection:
    bee = working_bees.popleft()
    nectar = nectar_collection.pop()

    if nectar < bee:
        working_bees.appendleft(bee)
        continue

    if nectar == 0:
        continue

    current_symbol = symbols_sequence.popleft()
    total_honey += abs(operations[current_symbol](bee, nectar))

print(f'Total honey made: {total_honey}')
if working_bees:
    print(f'Bees left: {", ".join(map(str, working_bees))}')
if nectar_collection:
    print(f'Nectar left: {", ".join(map(str, nectar_collection))}')
