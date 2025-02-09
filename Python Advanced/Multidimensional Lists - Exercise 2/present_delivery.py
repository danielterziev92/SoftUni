import sys
from io import StringIO

test1 = '''5
4
- X V -
- S - V
- - - -
X - - -
up
right
down
right
Christmas morning'''
test2 = '''3
4
- - - -
V - X -
- V C V
- - - S
left
up'''

sys.stdin = StringIO(test1)

santa_presents = int(input())
size = int(input())
santa_row = 0
santa_col = 0
matrix = []
nice_kids = 0
cookies = []
for row in range(size):
    line = input().split()
    for col in range(size):
        if line[col] == 'S':
            santa_row, santa_col = row, col
        elif line[col] == 'V':
            nice_kids += 1
    matrix.append(line)

directions = {
    'up': lambda x, y: (x - 1, y),
    'down': lambda x, y: (x + 1, y),
    'left': lambda x, y: (x, y - 1),
    'right': lambda x, y: (x, y + 1),
}

given_present = 0
while santa_presents > 0:
    command = input()

    if command == 'Christmas morning':
        break

    matrix[santa_row][santa_col] = '-'

    next_row, next_col = directions[command](santa_row, santa_col)

    if matrix[next_row][next_col] == 'X':
        matrix[next_row][next_col] = '-'

    if matrix[next_row][next_col] == 'V':
        matrix[next_row][next_col] = '-'
        santa_presents -= 1
        given_present += 1

    if matrix[next_row][next_col] == 'C':
        for direction in ['up', 'down', 'left', 'right']:
            after_next_row, after_next_col = directions[direction](next_row, next_col)
            if matrix[after_next_row][after_next_col] == 'X' or matrix[after_next_row][after_next_col] == 'V':
                if matrix[after_next_row][after_next_col] == 'V':
                    given_present += 1
                santa_presents -= 1
                matrix[after_next_row][after_next_col] = '-'

    santa_row, santa_col = next_row, next_col
    matrix[santa_row][santa_col] = 'S'

if santa_presents <= 0 and nice_kids != given_present:
    print('Santa ran out of presents!')
[print(*row) for row in matrix]
if nice_kids == given_present:
    print(f'Good job, Santa! {nice_kids} happy nice kid/s.')
else:
    print(f'No presents for {nice_kids - given_present} nice kid/s.')