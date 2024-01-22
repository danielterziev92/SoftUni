def can_place_queen(row, col, rows, cols, left_diagonal, right_diagonal):
    if row in rows:
        return False
    if col in cols:
        return False
    if (row - col) in left_diagonal:
        return False
    if (row + col) in right_diagonal:
        return False

    return True


def add_queen(board, row, col, rows, cols, left_diagonals, right_diagonals):
    board[row][col] = '*'

    rows.add(row)
    cols.add(col)
    left_diagonals.add(row - col)
    right_diagonals.add(row + col)


def remove_queen(board, row, col, rows, cols, left_diagonals, right_diagonals):
    board[row][col] = '-'

    rows.remove(row)
    cols.remove(col)
    left_diagonals.remove(row - col)
    right_diagonals.remove(row + col)


def print_board(board):
    for row in board:
        print(' '.join(row))

    print()


def queens_puzzle(board, row, rows, cols, left_diagonals, right_diagonals):
    if row == 8:
        print_board(board)

    for col in range(len(board)):
        if can_place_queen(row, col, rows, cols, left_diagonals, right_diagonals):
            add_queen(board, row, col, rows, cols, left_diagonals, right_diagonals)
            queens_puzzle(board, row + 1, rows, cols, left_diagonals, right_diagonals)
            remove_queen(board, row, col, rows, cols, left_diagonals, right_diagonals)


matrix = [['-'] * 8 for _ in range(8)]
queens_puzzle(matrix, 0, set(), set(), set(), set())
