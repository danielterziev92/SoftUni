import sys
from io import StringIO

test1 = '''3
11 2 4
4 5 6
10 8 -12'''
test2 = '''3
1 2 3
4 5 6
7 8 9'''

sys.stdin = StringIO(test2)

rows = int(input())
matrix = [[int(x) for x in input().split()] for _ in range(rows)]
result = 0
for i in range(len(matrix)):
    result += matrix[i][i]
print(result)
