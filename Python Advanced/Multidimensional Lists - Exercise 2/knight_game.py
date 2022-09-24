import sys
from io import StringIO

test1 = '''5 
0K0K0
K000K
00K00
K000K
0K0K0'''
test2 = '''2
KK
KK'''
test3 = '''8
0K0KKK00
0K00KKKK
00K0000K
KKKKKK0K
K0K0000K
KK00000K
00K0K000
000K00KK'''

sys.stdin = StringIO(test3)


def possible_movements(x, y):
    return [
        [x - 2, y - 1],
        [x - 1, y - 2],
        [x - 2, y + 1],
        [x - 1, y + 2],
        [x + 2, y - 1],
        [x + 1, y - 2],
        [x + 2, y + 1],
        [x + 1, y + 2],
    ]


rows = int(input())
matrix = [[x for x in input()] for _ in range(rows)]
removed_knight = 0
conflicted_points = set()
while True:
    total_hited_knight = 0
    knight_row = 0
    knight_col = 0
    for row in range(len(matrix)):
        for column in range(len(matrix[row])):
            if matrix[row][column] == "K":
                current_hited_knight = 0
                movements = possible_movements(row, column)
                for x, y in movements:
                    if 0 <= x < rows and 0 <= y < rows and matrix[x][y] == 'K':
                        current_hited_knight += 1
                if current_hited_knight > total_hited_knight:
                    total_hited_knight = current_hited_knight
                    knight_row = row
                    knight_col = column
    if total_hited_knight == 0:
        break

    matrix[knight_row][knight_col] = '0'
    removed_knight += 1

print(removed_knight)
