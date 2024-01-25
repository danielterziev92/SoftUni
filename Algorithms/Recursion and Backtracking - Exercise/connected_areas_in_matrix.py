import sys
from io import StringIO

from reportlab.graphics.charts import areas

test1 = '''4
9
---*---*-
---*---*-
---*---*-
----*-*--
'''
test2 = '''5
10
*--*---*--
*--*---*--
*--*****--
*--*---*--
*--*---*--
'''

sys.stdin = StringIO(test1)


def calculate_connected_areas(matrix, row, col):
    if not 0 <= row < len(matrix) or not 0 <= col < len(matrix[0]):
        return 0

    if matrix[row][col] != '-':
        return 0

    matrix[row][col] = 'V'
    result = 1

    result += calculate_connected_areas(matrix, row + 1, col)
    result += calculate_connected_areas(matrix, row - 1, col)
    result += calculate_connected_areas(matrix, row, col + 1)
    result += calculate_connected_areas(matrix, row, col - 1)

    return result


rows, cols = int(input()), int(input())
matrix = [list(input()) for _ in range(rows)]

areas = list()
for row in range(rows):
    for col in range(cols):
        size = calculate_connected_areas(matrix, row, col)
        if size == 0:
            continue

        areas.append((row, col, size))

print(f'Total areas found: {len(areas)}')
for idx, area in enumerate(sorted(areas, key=lambda x: x[2], reverse=True)):
    row, col, size = area
    print(f'Area #{idx} at ({row}, {col}), size: {size}')
