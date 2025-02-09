import sys
from io import StringIO

test1 = '''Hello
Bye'''
test2 = '''Hello
2'''

sys.stdin = StringIO(test2)

try:
    text = input()
    times = int(input())
    print(text * times)
except ValueError:
    print('Variable times must be an integer ')