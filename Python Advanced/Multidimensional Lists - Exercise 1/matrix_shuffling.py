import sys
from io import StringIO

test1 = '''2 3
1 2 3
4 5 6
swap 0 0 1 1
swap 10 9 8 7
swap 0 1 1 0
END'''
test2 = '''1 2
Hello World
0 0 0 1
swap 0 0 0 1
swap 0 1 0 0
END'''

sys.stdin = StringIO(test2)

rows, columns = map(int, input().split())
matrix = [[x for x in input().split()] for _ in range(rows)]
while True:
    line = input()
    if line == 'END':
        break

    line = line.split()
    command = line[0]
    if command == 'swap' and len(line) == 5:
        row1, col1, row2, col2 = int(line[1]), int(line[2]), int(line[3]), int(line[4])
        try:
            matrix[row1][col1], matrix[row2][col2] = matrix[row2][col2], matrix[row1][col1]
            [print(*x) for x in matrix]
        except:
            print('Invalid input!')
    else:
        print('Invalid input!')