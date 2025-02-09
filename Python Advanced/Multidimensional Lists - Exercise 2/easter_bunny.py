import sys
from io import StringIO

test1 = '''5
1 3 7 9 11
X 5 4 X 63
7 3 21 95 1
B 1 73 4 9
9 2 33 2 0'''
test2 = '''8
4 18 9 7 24 41 52 11
54 21 19 X 6 34 75 57
76 67 7 44 76 27 56 37
92 35 25 37 52 34 56 72
35 X 1 45 4 X 37 63
105 X B 2 12 43 5 19
48 19 35 20 32 27 42 4
73 88 78 32 37 52 X 22'''

sys.stdin = StringIO(test2)

# Variant 2
size = int(input())
matrix = []
bunny_row, bunny_col = 0, 0
for row in range(size):
    elements = input().split()
    for col in range(size):
        if elements[col] == 'B':
            bunny_row, bunny_col = row, col
    matrix.append(elements)

directions = {
    'up': lambda x, y: (x - 1, y),
    'down': lambda x, y: (x + 1, y),
    'left': lambda x, y: (x, y - 1),
    'right': lambda x, y: (x, y + 1),
}

total_sum = float('-inf')
direction_paths = []
best_direction = ''

for direction in directions:
    current_sum = 0
    current_path = []
    row, col = directions[direction](bunny_row, bunny_col)

    while 0 <= row < size and 0 <= col < size and matrix[row][col] != 'X':
        current_sum += int(matrix[row][col])
        current_path.append([row, col])
        row, col = directions[direction](row, col)

    if current_sum > total_sum and current_path:
        total_sum = current_sum
        direction_paths = current_path
        best_direction = direction

print(best_direction)
print(*direction_paths, sep='\n')
print(total_sum)

# Variant 1
# def movements(row, col, matrix, direction):
#     result = 0
#     moves = []
#     while True:
#         if direction == 'up':
#             row -= 1
#         elif direction == 'down':
#             row += 1
#         elif direction == 'left':
#             col -= 1
#         elif direction == 'right':
#             col += 1
#
#         if 0 <= row < len(matrix) and 0 <= col < len(matrix) and matrix[row][col] != 'X':
#             result += int(matrix[row][col])
#             moves.append([f'{row}, {col}'])
#         else:
#             break
#
#     return result, moves
#
#
# size = int(input())
# matrix = []
# bunny_row, bunny_col = 0, 0
# for row in range(size):
#     elements = input().split()
#     for col in range(size):
#         if elements[col] == 'B':
#             bunny_row, bunny_col = row, col
#     matrix.append(elements)
#
# up_count, up_moves = movements(bunny_row, bunny_col, matrix, 'up')
# down_count, down_moves = movements(bunny_row, bunny_col, matrix, 'down')
# left_count, left_moves = movements(bunny_row, bunny_col, matrix, 'left')
# right_count, right_moves = movements(bunny_row, bunny_col, matrix, 'right')
# found_the_way = False
# if up_count > down_count and up_count > left_count and up_count > right_count:
#     print('up')
#     [print(f'[{"".join(row)}]') for row in up_moves]
#     print(up_count)
#     found_the_way = True
# elif down_count > up_count and down_count > left_count and down_count > right_count:
#     print('down')
#     [print(f'[{"".join(row)}]') for row in down_moves]
#     print(down_count)
#     found_the_way = True
# elif left_count > up_count and left_count > down_count and left_count > right_count:
#     print('left')
#     [print(f'[{"".join(row)}]') for row in left_moves]
#     print(left_count)
#     found_the_way = True
# elif right_count > up_count and right_count > down_count and right_count > left_count:
#     print('right')
#     [print(f'[{"".join(row)}]') for row in right_moves]
#     print(right_count)
#     found_the_way = True
#
# if not found_the_way:
#     if up_moves and up_count >= 0:
#         print('up')
#         [print(f'[{"".join(row)}]') for row in up_moves]
#         print(up_count)
#     elif down_moves and down_count >= 0:
#         print('down')
#         [print(f'[{"".join(row)}]') for row in down_moves]
#         print(down_count)
#         found_the_way = True
#     elif left_moves and left_count >= 0:
#         print('left')
#         [print(f'[{"".join(row)}]') for row in left_moves]
#         print(left_count)
#         found_the_way = True
#     elif right_moves and right_count >= 0:
#         print('right')
#         [print(f'[{"".join(row)}]') for row in right_moves]
#         print(right_count)
#         found_the_way = True