import sys
from io import StringIO

test1 = '''50
2
11 10 5 11 10 20
15 13 16
1500'''
test2 = '''20
6
14 13 12 11 10 5
13 3 11 10
800'''
test3 = '''33
1
12 11 10
10 20 30
100'''

sys.stdin = StringIO(test1)

from collections import deque

bullet_price = int(input())
size_of_gun_barrel = int(input())
bullets = deque(map(int, input().split()))
locks = deque(map(int, input().split()))
intelligence = int(input())
shoot_count = 0
is_done = False
while bullets and locks:
    for _ in range(size_of_gun_barrel):
        if not locks or not bullets:
            is_done = True
            break
        bullet = bullets.pop()
        if bullet <= locks[0]:
            print('Bang!')
            locks.popleft()
        else:
            print('Ping!')
        shoot_count += 1

    if bullets and not is_done:
        print('Reloading!')

if locks:
    print(f"Couldn't get through. Locks left: {len(locks)}")
else:
    earned_money = intelligence - (shoot_count * bullet_price)
    print(f'{len(bullets)} bullets left. Earned ${earned_money}')
