import sys
from io import StringIO

test1 = '''6 3 - 2 1 * 5 /'''
test2 = '''2 2 - 1 *'''
test3 = '''10 23 * 4 2 / 30 10 + 100 50 - 2 -1 *'''
test4 = '''4 4 5  +'''

sys.stdin = StringIO(test3)

from collections import deque
from math import floor

# Variant 1
# result = deque()
# expression = deque(input().split())
# while expression:
#     char = expression.popleft()
#     if char not in '+-*/':
#         result.append(int(char))
#     else:
#         while len(result) > 1:
#             numb1 = result.popleft()
#             numb2 = result.popleft()
#             result.appendleft(floor(eval(f'{numb1}{char}{numb2}')))
# print(*result)


# Variant 2
result = deque()
expression = deque(input().split())
operators = {
    '+': lambda a, b: a + b,
    '-': lambda a, b: a - b,
    '*': lambda a, b: a * b,
    '/': lambda a, b: a // b,
}
while expression:
    char = expression.popleft()
    if char in operators:
        while len(result) > 1:
            numb1 = result.popleft()
            numb2 = result.popleft()
            operation = operators[char](numb1, numb2)
            result.appendleft(operation)
    else:
        result.append(int(char))
print(*result)