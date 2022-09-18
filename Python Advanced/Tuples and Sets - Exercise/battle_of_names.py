import sys
from io import StringIO

test1 = '''4
Pesho
Stefan
Stamat
Gosho'''
test2 = '''6
Preslav
Gosho
Ivan
Stamat
Pesho
Stefan'''

sys.stdin = StringIO(test2)

from math import floor

odd_sum = set()
even_sum = set()
count = int(input())
for i in range(1, count + 1):
    name = input()
    sum_char = floor(sum([ord(x) for x in name]) / i)
    if sum_char % 2 == 0:
        even_sum.add(sum_char)
    else:
        odd_sum.add(sum_char)

if odd_sum == even_sum:
    result = map(str, odd_sum.union(even_sum))
elif sum(odd_sum) > sum(even_sum):
    result = map(str, odd_sum.difference(even_sum))
else:
    result = map(str, even_sum.symmetric_difference(odd_sum))

print(', '.join(result))
