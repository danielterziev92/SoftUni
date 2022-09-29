import sys
from io import StringIO

test1 = '''1
4
-5
3
10 '''

sys.stdin = StringIO(test1)


class ValueCannotBeNegative(Exception):
    pass


for _ in range(5):
    data = int(input())
    if data < 0:
        raise ValueCannotBeNegative
