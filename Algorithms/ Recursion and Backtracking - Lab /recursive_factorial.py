import sys
from io import StringIO

test1 = '5'
test2 = '10'

sys.stdin = StringIO(test2)


def calculate_factorial(numb, idx=1):
    if numb == idx:
        return idx

    return idx * calculate_factorial(numb, idx + 1)


input_numb = int(input())
print(calculate_factorial(input_numb))
