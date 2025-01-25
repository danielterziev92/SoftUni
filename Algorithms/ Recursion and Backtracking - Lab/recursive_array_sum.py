import sys
from io import StringIO

test1 = '1 2 3 4'
test2 = '-1 0 1'

sys.stdin = StringIO(test2)


def sum_all_elements(numbs, idx=0):
    if idx == len(numbs) - 1:
        return numbs[idx]

    return numbs[idx] + sum_all_elements(numbs, idx + 1)


input_numbs = list(map(lambda x: int(x), input().split(' ')))
print(sum_all_elements(input_numbs))
