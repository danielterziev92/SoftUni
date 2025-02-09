import sys
from io import StringIO

test1 = '''3, 6
7 1 3 3 2 1
1 3 9 8 5 6
4 6 7 9 1 0'''

sys.stdin = StringIO(test1)

rows, columns = map(int, input().split(', '))
matrix = [[] for row in range(columns)]
for _ in range(rows):
    for index, numb in enumerate(input().split()):
        matrix[index].append(int(numb))

for col in matrix:
    print(sum(col))