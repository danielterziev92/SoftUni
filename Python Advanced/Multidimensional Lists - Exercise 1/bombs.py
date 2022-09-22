import sys
from io import StringIO

test1 = '''4
8 3 2 5
6 4 7 9
9 9 3 6
6 8 1 2
1,2 2,1 2,0'''

test2 = '''3
7 8 4
3 1 5
6 4 9
0,2 1,0 2,2'''

sys.stdin = StringIO(test2)

from collections import deque

rows = int(input())
matrix = [list(map(int, input().split())) for _ in range(rows)]
bombs = deque()
[bombs.append(x) for x in input().split()]
while bombs:
    row, column = bombs.popleft().split(',')
    row, column = int(row), int(column)
    bomb_value = 0
    if matrix[row][column]:
        bomb_value = matrix[row][column]

    if bomb_value <= 0:
        continue

    end_row = 3
    end_col = 3
    if row == 0:
        end_row -= 1
    if column == 0:
        end_col -= 1

    if row > 0:
        row -= 1
    if column > 0:
        column -= 1

    if row + end_row > len(matrix):
        end_row -= 1
    if column + end_col > len(matrix):
        end_col -= 1

    for i in range(row, row + end_row):
        for j in range(column, column + end_col):
            if matrix[i][j] and matrix[i][j] > 0:
                matrix[i][j] -= bomb_value

positive = []
[[positive.append(numb) for numb in row if numb > 0] for row in matrix]
print(f'Alive cells: {len(positive)}')
print(f'Sum: {sum(positive)}')
[print(*x) for x in matrix]
