import sys
from io import StringIO

test1 = '''2
1, 2, 3
4, 5, 6'''
test2 = '''3
10, 2, 21, 4
5, 20, 41, 9
6, 2, 4, 99'''

sys.stdin = StringIO(test2)

rows = int(input())
matrix = []
for _ in range(rows):
    line = [int(x) for x in input().split(', ')]
    matrix.extend(line)
print(matrix)
