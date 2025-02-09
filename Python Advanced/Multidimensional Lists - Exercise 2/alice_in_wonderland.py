import sys
from io import StringIO

test1 = '''5
. A . . 1
R . 2 . .
4 7 . 1 .
. . . 2 .
. 3 . . .
down
right
left
down
up
left'''
test2 = '''7
. A . 1 1 . .
9 . . . 6 . 5
. 6 . R . . .
. 3 . . 1 . .
. . . 2 . . 2
. 3 . . 1 . .
. 8 3 . . . 2
left
down
down
right'''

sys.stdin = StringIO(test2)

size = int(input())
matrix = []
alice_row = 0
alice_col = 0

is_alice_fount = False
for row in range(size):
    line = input().split()
    if not is_alice_fount:
        for col in range(len(line)):
            if line[col] == 'A':
                alice_row, alice_col = row, col
                is_alice_fount = True
    matrix.append(line)
matrix[alice_row][alice_col] = '*'

bags_of_tea = 0

directions = {
    'up': lambda x, y: (x - 1, y),
    'down': lambda x, y: (x + 1, y),
    'left': lambda x, y: (x, y - 1),
    'right': lambda x, y: (x, y + 1),
}


while bags_of_tea < 10:
    command = input()

    matrix[alice_row][alice_col] = '*'
    next_row, next_col = directions[command](alice_row, alice_col)

    if next_row < 0 or next_row >= size or next_col < 0 or next_col >= size:
        break

    alice_row, alice_col = next_row, next_col

    if matrix[alice_row][alice_col] == 'R':
        break

    if matrix[alice_row][alice_col] == '.' or matrix[alice_row][alice_col] == '*':
        continue

    bags_of_tea += int(matrix[alice_row][alice_col])

matrix[alice_row][alice_col] = '*'
if bags_of_tea >= 10:
    print('She did it! She went to the party.')
else:
    print("Alice didn't make it to the tea party.")
[print(*row) for row in matrix]