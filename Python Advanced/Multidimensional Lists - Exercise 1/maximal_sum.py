import sys
from io import StringIO

test1 = '''4 5
1 5 5 2 4
2 1 4 14 3
3 7 11 2 8
4 8 12 16 4'''
test2 = '''5 6
1 0 4 3 1 1
1 3 1 3 0 4
6 4 1 2 5 6
2 2 1 5 4 1
3 3 3 6 0 5'''

sys.stdin = StringIO(test1)

rows, columns = map(int, input().split())
matrix = [[int(x) for x in input().split()] for _ in range(rows)]

final_matrix = []
final_sum_matrix = 0

for ind_row, last_ind_row in enumerate(range(2, rows)):
    for ind_col, last_ind_col in enumerate(range(2, columns)):
        first_row_first_col = matrix[ind_row][ind_col]
        first_row_second_col = matrix[ind_row][ind_col + 1]
        first_row_third_col = matrix[ind_row][last_ind_col]
        second_row_first_col = matrix[ind_row + 1][ind_col]
        second_row_second_col = matrix[ind_row + 1][ind_col + 1]
        second_row_third_col = matrix[ind_row + 1][last_ind_col]
        third_row_first_col = matrix[last_ind_row][ind_col]
        third_row_second_col = matrix[last_ind_row][ind_col + 1]
        third_row_third_col = matrix[last_ind_row][last_ind_col]
        sum_of_3x3_matrix = (first_row_first_col + first_row_second_col + first_row_third_col) + \
                            (second_row_first_col + second_row_second_col + second_row_third_col) + \
                            (third_row_first_col + third_row_second_col + third_row_third_col)
        if sum_of_3x3_matrix >= final_sum_matrix:
            final_sum_matrix = sum_of_3x3_matrix
            final_matrix = [
                [str(first_row_first_col), str(first_row_second_col), str(first_row_third_col)],
                [str(second_row_first_col), str(second_row_second_col), str(second_row_third_col)],
                [str(third_row_first_col), str(third_row_second_col), str(third_row_third_col)]
            ]

print(f'Sum = {final_sum_matrix}')
[print(' '.join(x)) for x in final_matrix]
