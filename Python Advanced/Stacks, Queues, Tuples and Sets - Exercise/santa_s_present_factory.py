import sys
from io import StringIO

test1 = '''10 -5 20 15 -30 10
40 60 10 4 10 0'''
test2 = '''30 5 15 60 0 30
-15 10 5 -15 25'''
test3 = '''30 10
15 10 5 0 10'''

sys.stdin = StringIO(test3)

from collections import deque

materials = list(map(int, input().split()))
magic_levels = deque(map(int, input().split()))
magic_toys = {150: 'Doll', 250: 'Wooden train', 300: 'Teddy bear', 400: 'Bicycle'}
crafted_present = {}
while materials and magic_levels:

    material = materials.pop()
    magic_level = magic_levels.popleft()
    total = (material * magic_level)

    if magic_level == 0 and material == 0:
        continue
    elif magic_level == 0:
        materials.append(material)
        continue
    elif material == 0:
        magic_levels.appendleft(magic_level)
        continue

    if total in magic_toys:
        present = magic_toys[total]
        if present not in crafted_present:
            crafted_present[present] = 0
        crafted_present[present] += 1
    else:
        if total < 0:
            materials.append(material + magic_level)
        else:
            materials.append(material + 15)

if ('Doll' in crafted_present and 'Train' in crafted_present) or \
        ('Teddy bear' in crafted_present and 'Bicycle' in crafted_present):
    print('The presents are crafted! Merry Christmas!')
else:
    print('No presents this Christmas!')
if materials:
    print(f'Materials left: {", ".join(map(str, reversed(materials)))}')
if magic_levels:
    print(f'Magic left: {", ".join(map(str, magic_levels))}')
if crafted_present:
    for present, amount in sorted(crafted_present.items(), key=lambda x: x[0]):
        print(f'{present}: {amount}')