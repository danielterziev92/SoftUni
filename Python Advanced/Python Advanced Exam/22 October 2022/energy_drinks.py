import sys
from io import StringIO

test1 = '''34, 2, 3
40, 100, 250'''

test2 = '''1, 16, 8, 14, 5 
27, 23'''

test3 = '''1, 23, 2, 1, 42, 22, 7, 14
51, 100, 3, 7'''

sys.stdin = StringIO(test3)

from collections import deque

milligrams_of_caffeine = list(map(int, input().split(', ')))
energy_drinks = deque(map(int, input().split(', ')))

total_caffeine = 0

while milligrams_of_caffeine and energy_drinks:
    caffeine = milligrams_of_caffeine.pop()
    drink = energy_drinks.popleft()

    total_energy = caffeine * drink

    if total_energy + total_caffeine > 300:
        energy_drinks.append(drink)
        if total_caffeine:
            total_caffeine -= 30
    else:
        total_caffeine += total_energy

if energy_drinks:
    print(f'Drinks left: {", ".join(map(str, energy_drinks))}')
else:
    print("At least Stamat wasn't exceeding the maximum caffeine.")

print(f'Stamat is going to sleep with {total_caffeine} mg caffeine.')
