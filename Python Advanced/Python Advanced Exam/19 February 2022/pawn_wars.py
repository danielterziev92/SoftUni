import sys
from io import StringIO

test1 = '''- - - - - - b -
- - - - - - - -
- - - - - - - -
- - - - - - - -
- - - - - - - -
- w - - - - - -
- - - - - - - -
- - - - - - - -'''

test2 = '''- - - - - - - -
- - - - - - - -
- - - - - - - -
- - - - - - - -
- - - - - - - -
b - - - - - - -
- w - - - - - -
- - - - - - - -'''

test3 = '''- - - - - - - -
- - - - - - - -
- - - - - - - -
- - - - - - - b
- - - - - - - -
- - - - - - - -
w - - - - - - -
- - - - - - - -'''

sys.stdin = StringIO(test3)


def next_move(color, value):
    if color == 'white':
        value -= 1
    else:
        value += 1
    return value


columns = {x: chr(97 + x) for x in range(8)}
rows = {x: (8 - x) for x in range(8)}

matrix = []
found = [False, False]
white_row, white_col = 0, 0
black_row, black_col = 0, 0

for row in range(8):
    line = input().split()
    if not all(found):
        for col in range(8):
            if line[col] == 'w':
                white_row, white_col = row, col
                found[0] = True
            if line[col] == 'b':
                black_row, black_col = row, col
                found[1] = True
    matrix.append(line)

first_player, second_player = ('white', white_row, white_col), ('black', black_row, black_col)
is_capture = False

while True:
    player_name, player_row, player_col = first_player
    matrix[player_row][player_col] = '-'
    player_row = next_move(player_name, player_row)

    if player_name == 'white' and player_row == 0 or player_name == 'black' and player_row == 7:
        place_in_matrix = f'{columns[player_col]}{rows[player_row]}'
        print(f'Game over! {player_name.capitalize()} pawn is promoted to a queen at {place_in_matrix}.')
        break

    second_player_char = second_player[0][0]
    if 0 <= player_row < 8 and 0 <= player_col + 1 < 8 and \
            matrix[player_row][player_col + 1] == f'{second_player_char}':
        player_col += 1
        is_capture = True
    elif 0 <= player_row < 8 and 0 <= player_col - 1 < 8 and \
            matrix[player_row][player_col - 1] == f'{second_player_char}':
        player_col -= 1
        is_capture = True

    if is_capture:
        place_in_matrix = f'{columns[player_col]}{rows[player_row]}'
        print(f'Game over! {player_name.capitalize()} win, capture on {place_in_matrix}.')
        break

    matrix[player_row][player_col] = first_player[0][0]
    first_player = (player_name, player_row, player_col)
    first_player, second_player = second_player, first_player
