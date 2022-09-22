import sys
from io import StringIO

test1 = '''5
up right right up right
* * * c *
* * * e *
* * c * *
s * * c *
* * c * *'''

test2 = '''4
up right right right down
* * * e
* * c *
* s * c
* * * *'''

test3 = '''6
left left down right up left left down down down
* * * * * *
e * * * c *
* * c s * *
* * * * * *
c * * * c *
* * c * * *'''

sys.stdin = StringIO(test3)

from collections import deque

size = int(input())
movements = deque(input().split())
matrix = [[x for x in input().split()] for _ in range(size)]
total_coals = sum([sum([1 for x in row if x == 'c']) for row in matrix])
row, column = 0, 0
is_game_over = False
for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        if matrix[i][j] == 's':
            row, column = i, j

while total_coals and movements:
    command = movements.popleft()
    if command == 'up':
        if row == 0:
            continue
        row -= 1
    elif command == 'down':
        if row == len(matrix) - 1:
            continue
        row += 1
    elif command == 'left':
        if column == 0:
            continue
        column -= 1
    elif command == 'right':
        if column == len(matrix[row]) - 1:
            continue
        column += 1

    if matrix[row][column] == '*':
        matrix[row][column] = 's'
    elif matrix[row][column] == 'e':
        print(f'Game over! ({row}, {column})')
        is_game_over = True
        break
    elif matrix[row][column] == 'c':
        matrix[row][column] = 's'
        total_coals -= 1

if total_coals == 0 and not is_game_over:
    print(f'You collected all coal! ({row}, {column})')
elif not is_game_over:
    print(f'{total_coals} pieces of coal left. ({row}, {column})')
