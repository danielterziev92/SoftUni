import sys
from io import StringIO

test1 = '''5
01
. . . . .
. . . T .
. . . . .
. T . . .
. . F . .
down
right
right
right
down
right
up
down
right
up
End'''

test2 = '''10
45
. . . . . . . . . . 
. . T . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
. . . . . . F . . .
. . . . . . . . . .
. . . . . . . . . . 
. . . . . . . T . .
right
down
down
right
up
left
up
up
End'''

sys.stdin = StringIO(test2)


def print_matrix(game_matrix):
    result = ''
    for row in game_matrix:
        result += ''.join(row) + '\n'
    return result


def end_of_tunnel(game_matrix, row, col):
    found = False
    for r in range(len(game_matrix)):
        if not found:
            for c in range(len(game_matrix[r])):
                if game_matrix[r][c] == 'T':
                    row, col = r, c
                    found = True
    return row, col


matrix_size = int(input())
car_name = input()
matrix = [[x for x in input().split()] for _ in range(matrix_size)]

car_row, car_col = 0, 0

directions = {
    'left': lambda x, y: (x, y - 1),
    'right': lambda x, y: (x, y + 1),
    'up': lambda x, y: (x - 1, y),
    'down': lambda x, y: (x + 1, y),
}

disqualified = False
car_passed_km = 0

while True:
    command = input()

    if command == 'End':
        disqualified = True
        break

    next_row, next_col = directions[command](car_row, car_col)

    car_passed_km += 10

    if matrix[next_row][next_col] == 'T':
        matrix[next_row][next_col] = '.'
        next_row, next_col = end_of_tunnel(matrix, next_row, next_col)
        car_passed_km += 20
        matrix[next_row][next_col] = '.'
    elif matrix[next_row][next_col] == 'F':
        car_row, car_col = next_row, next_col
        break

    car_row, car_col = next_row, next_col

matrix[car_row][car_col] = 'C'
if disqualified:
    print(f'Racing car {car_name} DNF.')
else:
    print(f'Racing car {car_name} finished the stage!')

print(f'Distance covered {car_passed_km} km.')
print(print_matrix(matrix))
