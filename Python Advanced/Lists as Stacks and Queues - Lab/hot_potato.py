from collections import deque

kids = deque(input().split(" "))
starting_tossing = int(input())
count = 0
while len(kids) > 1:
    count += 1
    kid = kids.popleft()
    if count == starting_tossing:
        print(f"Removed {kid}")
        count = 0
    else:
        kids.append(kid)
print(f"Last is {kids.popleft()}")