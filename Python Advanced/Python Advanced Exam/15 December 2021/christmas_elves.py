import sys
from io import StringIO

test1 = '''10 16 13 25
12 11 8'''

test2 = '''10 14 22 4 5
11 16 17 11 1 8'''

test3 = '''5 6 7
2 1 5 7 5 3'''

sys.stdin = StringIO(test1)

from collections import deque


def create_toy(energy, material, created_toy):
    energy -= material - 1
    created_toy += 1
    return energy, material, created_toy


def every_third_time(energy, material, created_toy):
    energy, material, created_toy = energy, material * 2, created_toy + 1
    return energy, material, created_toy


def creating_toy(energy, material, created_toy, curr_count):
    old_energy = energy
    the_material = material

    if curr_count % 5 == 0:
        if curr_count % 3 == 0:
            energy, material = energy, material * 2

    if curr_count % 3 == 0:
        energy, material, created_toy = every_third_time(energy, material, created_toy)

    if energy >= material:
        energy, material, created_toy = create_toy(energy, material, created_toy)
        return energy, material, created_toy
    else:
        return old_energy * 2, the_material, 0


elf_energies = deque(map(int, input().split()))
materials = list(map(int, input().split()))

total_energies_needed = 0
toys = 0
count = 0

while elf_energies and materials:
    toys_to_create = 0
    elf_energy = elf_energies.popleft()

    if elf_energy < 5:
        continue

    count += 1
    current_material = materials.pop()

    elf_energy, current_material, toys_to_create = creating_toy(elf_energy, current_material, toys_to_create, count)

    if toys_to_create:
        if count % 5 != 0:
            toys += toys_to_create
        total_energies_needed += current_material
        elf_energies.append(elf_energy)
    else:
        materials.append(current_material)
        elf_energies.append(elf_energy)

print(f'Toys: {toys}')
print(f'Energy: {total_energies_needed}')
if elf_energies:
    print(f'Elves left: {", ".join(map(str, elf_energies))}')
if materials:
    print(f'Boxes left: {", ".join(map(str, materials))}')
