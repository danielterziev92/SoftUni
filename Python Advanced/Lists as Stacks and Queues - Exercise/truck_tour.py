from collections import deque

count_petrol_pumps = int(input())
pumps = deque()
for _ in range(count_petrol_pumps):
    pumps.append([int(x) for x in input().split()])

for index in range(count_petrol_pumps):
    petrol_amount = 0
    is_failed = False
    for amount, distance in pumps:
        petrol_amount += amount - distance
        if petrol_amount < 0:
            is_failed = True
            break

    if is_failed:
        pumps.append(pumps.popleft())
    else:
        print(index)
        break