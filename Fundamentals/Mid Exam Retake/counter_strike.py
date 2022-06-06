energy = int(input())
line = input()
count_battle = 0
while line != 'End of battle':
    distance = int(line)

    if energy >= distance:
        energy -= distance
        count_battle += 1
    else:
        print(f"Not enough energy! Game ends with {count_battle} won battles and {energy} energy")
        exit()

    if count_battle % 3 == 0:
        energy += count_battle
        
    line = input()

print(f"Won battles: {count_battle}. Energy left: {energy}")
