import sys
from io import StringIO

test1 = '1 2 3 4 5 6'

sys.stdin = StringIO(test1)


def print_reverse_array(arr, idx):
    if idx == len(arr):
        return

    print_reverse_array(arr, idx + 1)

    print(arr[idx], end=' ')


print_reverse_array(input().split(' '), 0)
