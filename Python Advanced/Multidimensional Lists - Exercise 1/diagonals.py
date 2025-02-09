import sys
from io import StringIO

test1 = '''3
1, 2, 3
4, 5, 6
7, 8, 9'''

sys.stdin = StringIO(test1)

rows = int(input())
matrix = [[x for x in input().split(', ')] for _ in range(rows)]
primary_diagonal = [matrix[i][i] for i in range(len(matrix))]
secondary_diagonal = [matrix[i][len(matrix)-1-i] for i in range(len(matrix))]
print(f'Primary diagonal: {", ".join(primary_diagonal)}. Sum: {sum(map(int, primary_diagonal))}')
print(f'Secondary diagonal: {", ".join(secondary_diagonal)}. Sum: {sum(map(int, secondary_diagonal))}')