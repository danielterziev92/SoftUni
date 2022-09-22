import sys
from io import StringIO

test1 = '''3
11 2 4
4 5 6
10 8 -12'''
test2 = '''4
-7 14 9 -20
3 4 9 21
-14 6 8 44
30 9 7 -14'''

sys.stdin = StringIO(test2)

rows = int(input())
matrix = [[x for x in input().split()] for _ in range(rows)]
primary_diagonal = [matrix[i][i] for i in range(len(matrix))]
secondary_diagonal = [matrix[i][len(matrix)-1-i] for i in range(len(matrix))]
print(abs(sum(map(int, primary_diagonal)) - sum(map(int, secondary_diagonal))))
