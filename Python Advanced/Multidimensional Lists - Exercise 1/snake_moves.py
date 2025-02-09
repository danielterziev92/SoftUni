import sys
from io import StringIO

test1 = '''5 6
SoftUni'''

test2 = '''1 4
Python'''

sys.stdin = StringIO(test1)

from collections import deque

rows, columns = map(int, input().split())
word = input()
ind = 0
for i in range(rows):
    row_matrix = deque()
    for _ in range(columns):
        if ind == len(word):
            ind = 0
        if i % 2 == 0:
            row_matrix.append(word[ind])
        else:
            row_matrix.appendleft(word[ind])
        ind += 1

    print(''.join(row_matrix))