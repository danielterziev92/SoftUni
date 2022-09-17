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

bullet = int(input())
size_of_gun_barrel = int(input())
bullets = map(int, input().split())
locks = deque(map(int, input().split()))
value_of_the_intelligence = int(input())
