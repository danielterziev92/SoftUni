import sys
from io import StringIO

test1 = '''3
ABC
DEF
X!@
!'''
test2 = '''4
asdd
xczc
qwee
qefw
4'''

sys.stdin = StringIO(test2)

rows = int(input())
matrix = [[ch for ch in input()] for _ in range(rows)]
searching_symbol = input()

for inx1, row in enumerate(matrix):
    for inx2, ch in enumerate(row):
        if ch == searching_symbol:
            print(f'({inx1}, {inx2})')
            exit()

print(f'{searching_symbol} does not occur in the matrix')
