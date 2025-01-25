import sys
from io import StringIO

test1 = '2'
test2 = '5'

sys.stdin = StringIO(test2)


def drawing(numb):
    if numb == 0:
        return

    print('*' * numb)
    drawing(numb - 1)
    print('#' * numb)


input_numb = int(input())
drawing(input_numb)
