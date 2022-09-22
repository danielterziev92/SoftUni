import sys
from io import StringIO

test1 = '''4 6'''

sys.stdin = StringIO(test1)


rows, columns = map(int, input().split())
start_second_ind = 97
for row in range(97, 97 + rows):
    sum_matrix = []
    for column in range(start_second_ind, start_second_ind + columns):
        sum_matrix.append(f'{chr(row)}{chr(column)}{chr(row)}')
    start_second_ind += 1
    print(*sum_matrix)
