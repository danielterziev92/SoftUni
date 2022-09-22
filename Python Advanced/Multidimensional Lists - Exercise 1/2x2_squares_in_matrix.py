import sys
from io import StringIO

test1 = '''3 4
A B B D
E B B B
I J B B'''
test2 = '''2 2
a b
c d'''
test3 = '''5 4
A A B D
A A B B
I J B B
C C C G
C C K P'''

sys.stdin = StringIO(test3)

rows, columns = map(int, input().split())

matrix = [[x for x in input().split()] for _ in range(rows)]
result = 0
for row_inx, next_row_inx in enumerate(range(1, rows)):
    sub_matrix = matrix[row_inx]
    next_sub_matrix = matrix[next_row_inx]
    for col_inx, next_col_inx in enumerate(range(1, columns)):
        first_el = sub_matrix[col_inx]
        second_el = sub_matrix[next_col_inx]
        third_el = next_sub_matrix[col_inx]
        fourth_el = next_sub_matrix[next_col_inx]
        if len({first_el, second_el, third_el, fourth_el}) == 1:
            result += 1

print(result)
