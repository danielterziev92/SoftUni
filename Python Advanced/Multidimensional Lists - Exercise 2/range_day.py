import sys
from io import StringIO

test1 = '''. . . . . 
x . . . . 
. A . . . 
. . . x . 
. x . . x 
3
shoot down
move left 4
move left 1'''
test2 = '''. . . . . 
. . . . . 
. A x . . 
. . . . . 
. x . . . 
2
shoot down
shoot right'''
test3 = '''. . . . . 
. . . . . 
. . x . . 
. . . . . 
. x . . A 
3
shoot down
move right 2
shoot left'''

sys.stdin = StringIO(test1)

rows, cols = 5, 5
matrix = []
position_row = 0
position_col = 0
total_target = 0
for row in range(5):
    line = input().split()
    for col in range(5):
        if line[col] == 'A':
            position_row = row
            position_col = col
        if line[col] == 'x':
            total_target += 1
    matrix.append(line)

directions = {
    'left': lambda x, y, value: (x, y - value),
    'right': lambda x, y, value: (x, y + value),
    'down': lambda x, y, value: (x + value, y),
    'up': lambda x, y, value: (x - value, y),
}

command_count = int(input())
target_hit = 0
target_hit_position = []
for _ in range(command_count):
    if total_target == 0:
        break

    command = input()

    if command.startswith('move'):
        _, direction, step = command.split()

        next_row, next_col = directions[direction](position_row, position_col, int(step))
        if next_row < 0 or next_row >= 5 or next_col < 0 or next_col >= 5:
            continue

        if matrix[next_row][next_col] == '.':
            position_row, position_col = next_row, next_col

    elif command.startswith('shoot'):
        _, direction = command.split()

        next_row, next_col = directions[direction](position_row, position_col, 1)
        while 0 <= next_row < 5 and 0 <= next_col < 5:
            if matrix[next_row][next_col] == 'x':
                total_target -= 1
                target_hit += 1
                matrix[next_row][next_col] = '.'
                target_hit_position.append(f"{next_row}, {next_col}")
                break
            next_row, next_col = directions[direction](next_row, next_col, 1)

if total_target > 0:
    print(f"Training not completed! {total_target} targets left.")
else:
    print(f"Training completed! All {target_hit} targets hit.")

if target_hit_position:
    [print(f'[{row}]') for row in target_hit_position]

