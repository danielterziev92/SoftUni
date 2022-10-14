import sys
from io import StringIO

test1 = '''- R - - - -
- - - - - R
- E - R - -
- W - - - -
- - - C - -
M - - - - -
down, right, down, right, down, left, left, left'''

test2 = '''R - - - - -
- - C - - -
- - - - M -
- - W - - -
- E - W - R
- - - - - -
up, right, down, right, right, right'''

test3 = '''R - - - - -
- - C - - -
- - - - M -
C - M - R M
- E - W - -
- - - - - -
right, right, up, left, left, left, left, left'''

sys.stdin = StringIO(test1)


def next_positions(direction, x, y):
    directions = {
        'up': lambda the_row, the_col: (the_row - 1, the_col),
        'down': lambda the_row, the_col: (the_row + 1, the_col),
        'left': lambda the_row, the_col: (the_row, the_col - 1),
        'right': lambda the_row, the_col: (the_row, the_col + 1)
    }

    next_row, next_col = directions[direction](x, y)

    if next_row < 0:
        next_row += 6
    elif next_row > 5:
        next_row -= 6

    if next_col < 0:
        next_col += 6
    elif next_col > 5:
        next_col -= 6

    return next_row, next_col


matrix = []
rover_row, rover_col = 0, 0

for row in range(6):
    line = input().split()
    if not rover_row and not rover_col:
        for col in range(len(line)):
            if line[col] == 'E':
                rover_row, rover_col = row, col
                break
    matrix.append(line)

deposits = {
    'W': 'Water',
    'M': 'Metal',
    'C': 'Concrete'
}

collected_deposits = {
    'Water': 0,
    'Metal': 0,
    'Concrete': 0,
}

is_broken = False

for command in input().split(', '):

    rover_row, rover_col = next_positions(command, rover_row, rover_col)

    if matrix[rover_row][rover_col] in deposits:
        print(f'{deposits[matrix[rover_row][rover_col]]} deposit found at ({rover_row}, {rover_col})')
        collected_deposits[deposits[matrix[rover_row][rover_col]]] += 1

    elif matrix[rover_row][rover_col] == 'R':
        print(f'Rover got broken at ({rover_row}, {rover_col})')
        is_broken = True

if all([True if x > 0 else False for x in collected_deposits.values()]):
    print('Area suitable to start the colony.')
else:
    print('Area not suitable to start the colony.')
