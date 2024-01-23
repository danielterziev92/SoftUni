import sys
from io import StringIO

test1 = '1 2 3 4 5 6'

sys.stdin = StringIO(test1)


def reverse_array(arr, idx, rev_arr):
    if idx == len(arr):
        return

    reverse_array(arr, idx + 1, rev_arr)

    print(arr[idx], end=' ')


reverse_array(input().split(' '), 0, [])
