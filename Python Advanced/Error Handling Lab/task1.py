import sys
from io import StringIO

test1 = '''1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11'''
test2 = '''1, 4, 5'''
test3 = '''4, 5, 6, 1, 3'''
test4 = '''2, 5, 10'''

sys.stdin = StringIO(test3)

numbers_list = list(map(int, input().split(", ")))
result = 1
for number in numbers_list:
    if number <= 5:
        result *= number
    elif number <= 10:
        result /= number
print(result)
