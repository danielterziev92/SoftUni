import sys
from io import StringIO

test1 = '2'
test2 = '3'

sys.stdin = StringIO(test2)


def nested_loops_to_recursion(arr, idx, iter):
    if idx == len(arr):
        print(*arr, sep=' ')
        return

    for i in range(iter):
        arr[idx] = i + 1
        nested_loops_to_recursion(arr, idx + 1, iter)

    return arr


n = int(input())
input_arr = [0] * n
nested_loops_to_recursion(input_arr, 0, n)
