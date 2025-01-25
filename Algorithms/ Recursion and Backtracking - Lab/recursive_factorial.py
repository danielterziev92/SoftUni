import sys
from io import StringIO

test1 = '5'
test2 = '10'
test3 = '0'

sys.stdin = StringIO(test2)


def calculate_factorial(numb):
    if numb == 0:
        return 1

    return numb * calculate_factorial(numb - 1)


input_numb = int(input())
print(calculate_factorial(input_numb))
