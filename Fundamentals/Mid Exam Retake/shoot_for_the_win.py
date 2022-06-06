targets = input().split(" ")
targets = list(map(int, targets))
shoot = input()
while shoot != "End":
    index = int(shoot)
    if index >= len(targets):
        shoot = input()
        continue
    before_change = targets[index]
    targets[index] = -1
    for index, target in enumerate(targets):
        if target != -1 and target > before_change:
            targets[index] -= before_change
        elif target != -1 and target <= before_change:
            targets[index] += before_change

    shoot = input()

shooting_targets = targets.count(-1)
targets = list(map(str, targets))
all_targets = ' '.join(targets)
print(f"Shot targets: {shooting_targets} -> {all_targets}")
