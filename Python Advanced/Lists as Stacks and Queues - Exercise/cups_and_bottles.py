import sys
from io import StringIO

test1 = '''4 2 10 5
3 15 15 11 6'''
test2 = '''1 5 28 1 4
3 18 1 9 30 4 5'''
test3 = '''10 20 30 40 50
20 11'''

sys.stdin = StringIO(test3)


from collections import deque

cups_capacity = deque(map(int, input().split()))
filled_bottles = list(map(int, input().split()))
wasted_litters = 0
while cups_capacity and filled_bottles:
    cap = cups_capacity.popleft()
    bottle = filled_bottles.pop()
    if cap < bottle:
        bottle -= cap
        wasted_litters += bottle
    else:
        cap -= bottle
        if cap:
            cups_capacity.appendleft(cap)

if not cups_capacity:
    print(f'Bottles: {" ".join(map(str, filled_bottles))}')
else:
    print(f'Cups: {" ".join(map(str, cups_capacity))}')
print(f'Wasted litters of water: {wasted_litters}')