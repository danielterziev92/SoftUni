import sys
from io import StringIO

test1 = '''3
1 2 3
4 5 6
7 8 9
Add 0 0 5
Subtract 1 1 2
END'''

test2 = '''4
1 2 3 4
5 6 7 8
8 7 6 5
4 3 2 1
Add 4 4 100
Add 3 3 100
Subtract -1 -1 42
Subtract 0 0 42
END'''

sys.stdin = StringIO(test2)

rows = int(input())
matrix = [[int(x) for x in input().split()] for _ in range(rows)]
while True:
    line = input()
    if line == 'END':
        break

    command, row, column, value = line.split()

    row, column, value = int(row), int(column), int(value)

    if row >= len(matrix) or column >= len(matrix[row]) or row < 0 or column < 0:
        print('Invalid coordinates')
    elif command == 'Add':
        matrix[row][column] += value
    elif command == 'Subtract':
        matrix[row][column] -= value

[print(*row) for row in matrix]

