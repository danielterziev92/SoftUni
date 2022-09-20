import sys
from io import StringIO

test1 = '''3, 6
7, 1, 3, 3, 2, 1
1, 3, 9, 8, 5, 6
4, 6, 7, 9, 1, 0'''
test2 = '''2, 4
10, 11, 12, 13
14, 15, 16, 17'''

sys.stdin = StringIO(test2)

rows, columns = map(int, input().split(', '))
final_matrix = []
sum_result = 0
matrix = [[int(x) for x in input().split(', ')] for _ in range(rows)]
for row_inx, next_row_inx in enumerate(range(1, rows)):
    sub_matrix = matrix[row_inx]
    next_sub_matrix = matrix[next_row_inx]
    for col_inx, next_col_inx in enumerate(range(1, columns)):
        first_el = sub_matrix[col_inx]
        second_el = sub_matrix[next_col_inx]
        third_el = next_sub_matrix[col_inx]
        fourth_el = next_sub_matrix[next_col_inx]
        current_sum = first_el + second_el + third_el + fourth_el
        if current_sum > sum_result:
            final_matrix = [[first_el, second_el], [third_el, fourth_el]]
            sum_result = current_sum
[print(*x) for x in final_matrix]
print(sum_result)
