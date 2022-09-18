import sys
from io import StringIO

test1 = '''4 3
1
3
5
7
3
4
5'''
test2 = '''2 2
1
3
1
5'''

sys.stdin = StringIO(test2)

first_set = set()
second_set = set()
n_length, m_length = tuple(map(int, input().split()))
for _ in range(n_length):
    first_set.add(int(input()))
for _ in range(m_length):
    second_set.add(int(input()))

[print(x) for x in first_set.intersection(second_set)]
