def bunnie_population(row, col, rows, columns):
    possible_children = [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]
    result = []
    for child_row, child_col in possible_children:
        if not child_row < 0 or child_col < 0 or child_row >= rows or child_col >= columns:
            result.append([child_row, child_col])
    return result


def get_next_position(row, column, command):
    if command == 'U':
        return row - 1, column
    elif command == 'D':
        return row + 1, column
    elif command == 'L':
        return row, column - 1
    elif command == 'R':
        return row, column + 1


rows, columns = map(int, input().split())
matrix = [[x for x in input()] for _ in range(rows)]
commands = list(input())
player_row = 0
player_column = 0
bunnies = set()
for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        if matrix[i][j] == 'P':
            player_row, player_column = i, j
        if matrix[i][j] == 'B':
            bunnies.add(f'{i} {j}')

is_won = False
is_death = False

for command in commands:
    next_row, next_column = get_next_position(player_row, player_column, command)
    matrix[player_row][player_column] = '.'

    if next_row < 0 or next_column < 0 or next_row >= rows or next_column >= columns:
        is_won = True
    elif matrix[next_row][next_column] == 'B':
        is_death = True
        player_row, player_column = next_row, next_column
    else:
        matrix[next_row][next_column] = 'P'
        player_row, player_column = next_row, next_column

    new_bunnies = set()
    for bunny in bunnies:
        bunny_row, bunny_col = [int(x) for x in bunny.split()]
        children = bunnie_population(bunny_row, bunny_col, rows, columns)
        for child_row, child_col, in children:
            new_bunnies.add(f'{bunny_row} {bunny_col}')
            matrix[child_row][child_col] = 'B'
            if child_row == player_row and child_col == player_column:
                is_death = True

    bunnies = bunnies.union(new_bunnies)

    if is_won or is_death:
        break

[print(''.join(row)) for row in matrix]
if is_won:
    print(f'won: {player_row} {player_column}')
else:
    print(f'dead: {player_row} {player_column}')
