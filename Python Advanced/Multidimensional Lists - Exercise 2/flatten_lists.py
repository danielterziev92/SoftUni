import sys
from io import StringIO

test1 = '''1 2 3 |4 5 6 |  7  88'''
test2 = '''7 | 4  5|1 0| 2 5 |3'''
test3 = '''1| 4 5 6 7  |  8 9'''

sys.stdin = StringIO(test2)

inputs = input().split('|')
matrix = []
for row in inputs[::-1]:
    matrix.extend(row.split())
print(*matrix)