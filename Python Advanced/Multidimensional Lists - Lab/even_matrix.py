import sys
from io import StringIO

test1 = '''2
1, 2, 3
4, 5, 6'''
test2 = '''4
10, 33, 24, 5, 1
67, 34, 11, 110, 3
4, 12, 33, 63, 21
557, 45, 23, 55, 67'''

sys.stdin = StringIO(test2)

rows = int(input())
matrix = []
for _ in range(rows):
    line = [int(numb) for numb in input().split(', ') if int(numb) % 2 == 0]
    matrix.append(line)

print(matrix)
