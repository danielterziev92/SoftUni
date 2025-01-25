import sys
from io import StringIO

test1 = '''3
2
'''
test2 = '''3
5
'''

sys.stdin = StringIO(test2)


def move_down_or_right(matrix, rows, cols, row, col, paths):
    if row == rows:
        return

    if col == cols:
        return

    if row == rows - 1 and col == cols - 1:
        paths.append(1)
        return

    matrix[row][col] = 'V'
    move_down_or_right(matrix, rows, cols, row + 1, col, paths)
    move_down_or_right(matrix, rows, cols, row, col + 1, paths)

    matrix[row][col] = '-'

    return paths


r = int(input())
c = int(input())

matrix = [['-'] * c for _ in range(r)]

paths = move_down_or_right(matrix, r, c, 0, 0, [])
print(sum(paths))
