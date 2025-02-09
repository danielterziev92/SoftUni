def definition_of_matrix(row_count, col_count):
    return [[0 for _ in range(col_count)] for _ in range(row_count)]


def definition_of_available_cols(row_count, col_count):
    return [row_count for _ in range(col_count)]


def print_matrix(game_matrix):
    [print(x) for x in game_matrix]
    return


def definite_row_and_col():
    game_matrix = list()
    available_cols = list()
    while True:
        try:
            rows = int(input('Please enter how many rows: '))
            columns = int(input('Please enter how many columns: '))
            if rows < 4 or columns < 4:
                print('Numbers must be bigger then 3')
                continue
            game_matrix = definition_of_matrix(rows, columns)
            available_cols = definition_of_available_cols(rows, columns)
            break
        except ValueError:
            print('The input must be a number')
    return game_matrix, available_cols


def player_move(player, length, message: str):
    length += 1
    if not message:
        message = f'Player {player}, please choose a column: '
    while True:
        column_str = input(message)
        try:
            column = int(column_str)
            if 1 <= column <= length:
                return column - 1
            else:
                message = f'Enter number in range 1 - {length}: '
        except ValueError:
            print('You must insert only numbers')


def is_available_move(player_moves, available_cols):
    available_cols[player_moves] -= 1
    if available_cols[player_moves] < 0:
        return False
    return True


def apply_game_move_on_matrix(game_matrix, row, col, player):
    game_matrix[row][col] = player
    return game_matrix


def horizontal_connect_four(game_matrix, player):
    for start_row_index, end_row_index in enumerate(range(3, len(game_matrix))):
        for start_col_index, end_col_index in enumerate(range(3, len(game_matrix[start_row_index]))):
            if game_matrix[start_col_index][start_col_index:end_col_index + 1].count(player) == 4 or \
                    game_matrix[start_col_index + 1][start_col_index:end_col_index + 1].count(player) == 4 or \
                    game_matrix[end_row_index - 1][start_col_index:end_col_index + 1].count(player) == 4 or \
                    game_matrix[end_row_index][start_col_index:end_col_index + 1].count(player) == 4:
                return True
    return False


def vertical_connect_four(game_matrix, player):
    for start_row_index, end_row_index in enumerate(range(3, len(game_matrix))):
        for col_index in range(len(game_matrix[start_row_index])):
            if [
                game_matrix[start_row_index][col_index],
                game_matrix[start_row_index + 1][col_index],
                game_matrix[end_row_index - 1][col_index],
                game_matrix[end_row_index][col_index]
            ].count(player) == 4:
                return True
    return False


def primary_diagonals_connect_four(game_matrix, player):
    for start_row_index, end_row_index in enumerate(range(3, len(game_matrix))):
        for start_col_index, end_col_index in enumerate(range(3, len(game_matrix))):
            inner_matrix = [
                game_matrix[start_row_index][start_col_index:end_col_index + 1],
                game_matrix[start_row_index + 1][start_col_index:end_col_index + 1],
                game_matrix[end_row_index - 1][start_col_index:end_col_index + 1],
                game_matrix[end_row_index][start_col_index:end_col_index + 1]
            ]
            if [inner_matrix[i][i] for i in range(len(inner_matrix))].count(player) == 4:
                return True
    return False


def secondary_diagonals_connect_four(game_matrix, player):
    for start_row_index, end_row_index in enumerate(range(3, len(game_matrix))):
        for start_col_index, end_col_index in enumerate(range(3, len(game_matrix))):
            inner_matrix = [game_matrix[start_row_index][start_col_index:end_col_index + 1],
                            game_matrix[start_row_index + 1][start_col_index:end_col_index + 1],
                            game_matrix[end_row_index - 1][start_col_index:end_col_index + 1],
                            game_matrix[end_row_index][start_col_index:end_col_index + 1]
                            ]
            if [inner_matrix[i][len(inner_matrix) - 1 - i] for i in range(len(inner_matrix))].count(player) == 4:
                return True
    return False


def is_player_win(game_matrix, player):
    if vertical_connect_four(game_matrix, player):
        return True
    elif horizontal_connect_four(game_matrix, player):
        return True
    elif primary_diagonals_connect_four(game_matrix, player):
        return True
    elif secondary_diagonals_connect_four(game_matrix, player):
        return True
    return False


def play(game_matrix, available_cols):
    first_player, second_player = 1, 2
    len_of_columns = len(game_matrix[0]) - 1
    have_winner = False
    while True:
        if available_cols.count(0) == len(available_cols):
            break
        player_selected_col = player_move(first_player, len_of_columns, '')
        while not is_available_move(player_selected_col, available_cols):
            player_selected_col = player_move(first_player, len_of_columns,
                                              'This column is full, please choose another: ')
        apply_game_move_on_matrix(game_matrix, available_cols[player_selected_col], player_selected_col, first_player)
        print_matrix(game_matrix)
        if is_player_win(game_matrix, first_player):
            print(f'The winner is player {first_player}')
            have_winner = True
            break
        first_player, second_player = second_player, first_player

    if not have_winner:
        print('Nobody win the game')


matrix, available_matrix_cols = definite_row_and_col()
play(matrix, available_matrix_cols)