import sys
from io import StringIO

test1 = '''6, 5
. . . . .
C . . G .
. C . . .
G . . C .
. D . . D
Y . . . G
left-3
up-1
left-2
right-7
up-1
End'''

test2 = '''5, 6
. . . . . .
. . . . . .
Y C D D . .
. . . C . .
. . . C . .
right-3
down-3
End'''

test3 = '''5, 2
. .
. .
. Y
. .
. G
up-1
left-11
down-10
End'''

sys.stdin = StringIO(test3)


def left_move(len_row, x):
    if 0 <= x - 1 < len_row:
        return x - 1
    else:
        return x - 1 + len_row


def right_move(len_row, x):
    if 0 <= x + 1 < len_row:
        return x + 1
    else:
        return x + 1 - len_row


def up_move(len_col, y):
    if 0 <= y - 1 < len_col:
        return y - 1
    else:
        return y - 1 + len_col


def down_move(len_col, y):
    if 0 <= y + 1 < len_col:
        return y + 1
    else:
        return y + 1 - len_col


def check_items(collected_items, symbol):
    if symbol == 'D':
        collected_items['Christmas decorations'] += 1
    elif symbol == 'G':
        collected_items['Gifts'] += 1
    elif symbol == 'C':
        collected_items['Cookies'] += 1

    return collected_items


def check_matrix(game_matrix):
    result = True
    for row_values in game_matrix:
        if result:
            for col in row_values:
                if col not in ['.', 'x', 'Y']:
                    result = False
                    break
        else:
            break
    return result


rows, columns = map(int, input().split(', '))
my_row, my_col = 0, 0
matrix = []
found = False

for row in range(rows):
    line = input().split()
    if not found:
        for col in range(columns):
            if line[col] == 'Y':
                my_row, my_col, found = row, col, True
    matrix.append(line)

collected_items = {
    'Christmas decorations': 0,
    'Gifts': 0,
    'Cookies': 0,
}

collected_all_items = False

while True:
    try:
        line = input()
    except EOFError:
        break

    if line == 'End':
        break

    command, step = line.split('-')
    step = int(step)

    matrix[my_row][my_col] = 'x'

    if command == 'left':
        for _ in range(step):
            if check_matrix(matrix):
                collected_all_items = True
                break
            my_col = left_move(len(matrix[my_row]), my_col)
            collected_items = check_items(collected_items, matrix[my_row][my_col])
            matrix[my_row][my_col] = 'x'

    elif command == 'right':
        for _ in range(step):
            if check_matrix(matrix):
                collected_all_items = True
                break
            my_col = right_move(len(matrix[my_row]), my_col)
            collected_items = check_items(collected_items, matrix[my_row][my_col])
            matrix[my_row][my_col] = 'x'

    elif command == 'up':
        for _ in range(step):
            if check_matrix(matrix):
                collected_all_items = True
                break
            my_row = up_move(len(matrix), my_row)
            collected_items = check_items(collected_items, matrix[my_row][my_col])
            matrix[my_row][my_col] = 'x'

    elif command == 'down':
        for _ in range(step):
            if check_matrix(matrix):
                collected_all_items = True
                break
            my_row = down_move(len(matrix), my_row)
            collected_items = check_items(collected_items, matrix[my_row][my_col])
            matrix[my_row][my_col] = 'x'

    matrix[my_row][my_col] = 'Y'

if collected_all_items:
    print('Merry Christmas!')
print("You've collected:")
for key, value in collected_items.items():
    print(f'- {value} {key}')
[print(' '.join(row)) for row in matrix]