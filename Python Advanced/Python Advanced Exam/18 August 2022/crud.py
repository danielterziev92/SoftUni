import sys
from io import StringIO

test1 = '''. . . . . .
. 6 . . . .
G . S . t S
. . 10 . . .
. 95 . . 8 .
. . P . . .
(1, 1)
Create, down, r
Update, right, e
Create, right, a
Read, right
Delete, right
Stop'''

test2 = '''. . . . . .  
. 6 . . . .  
. T . D . O  
. . 10 A . .  
. 95 . 80 5 .  
. . P . t .   
(2, 3)
Create, down, o
Delete, right
Read, up
Create, left, 20
Update, up, P
Stop
'''

test3 = '''H 8 . . . .
70 i . . . .
t . . . B .
50 . 16 . C .
. . . t . .
. 25 . . . .
(0, 0)
Read, right
Read, down
Read, left
Delete, down
Create, right, 10
Read, left
Stop'''

sys.stdin = StringIO(test3)


def is_valid_step(curr_row, curr_col):
    if 0 <= curr_row < 6 and 0 <= curr_col < 6:
        return True
    return False


matrix = [[x for x in input().split()] for _ in range(6)]
row, column = [int(x) for x in input() if x.isdigit()]
directions = {
    'up': lambda this_row, this_col: (this_row - 1, this_col),
    'down': lambda this_row, this_col: (this_row + 1, this_col),
    'right': lambda this_row, this_col: (this_row, this_col + 1),
    'left': lambda this_row, this_col: (this_row, this_col - 1),
}
while True:
    line = input()
    if line == 'Stop':
        break
    line = line.split(', ')
    command, direction = line[0], line[1]
    next_row, next_col = directions[direction](row, column)

    if command == 'Create':
        value = line[2]
        if is_valid_step(next_row, next_col):
            if matrix[next_row][next_col] == '.':
                matrix[next_row][next_col] = value
    elif command == 'Update':
        value = line[2]
        if is_valid_step(next_row, next_col):
            if matrix[next_row][next_col].isdigit() or matrix[next_row][next_col].isalpha():
                matrix[next_row][next_col] = value
    elif command == 'Delete':
        if is_valid_step(next_row, next_col):
            if matrix[next_row][next_col].isdigit() or matrix[next_row][next_col].isalpha():
                matrix[next_row][next_col] = '.'
    elif command == 'Read':
        if is_valid_step(next_row, next_col):
            if matrix[next_row][next_col].isdigit() or matrix[next_row][next_col].isalpha():
                print(matrix[next_row][next_col])

    row, column = next_row, next_col

[print(' '.join(row)) for row in matrix]