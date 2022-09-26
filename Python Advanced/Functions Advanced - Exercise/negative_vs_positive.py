import sys
from io import StringIO

test1 = '''1 2 -3 -4 65 -98 12 57 -84'''
test2 = '''1 2 3'''

sys.stdin = StringIO(test1)


def numbers(*args):
    def sum_of_positive():
        result = 0
        for x in positive_numbs:
            result += x
        return result

    def sum_of_negative():
        result = 0
        for x in negative_numbs:
            result += x
        return result

    positive_numbs = []
    negative_numbs = []

    for numb in args:
        if numb < 0:
            negative_numbs.append(numb)
        else:
            positive_numbs.append(numb)

    result_sum_positive_numb = sum_of_positive()
    result_sum_negative_numb = sum_of_negative()

    print(result_sum_negative_numb)
    print(result_sum_positive_numb)

    if abs(result_sum_negative_numb) > result_sum_positive_numb:
        return 'The negatives are stronger than the positives'
    else:
        return 'The positives are stronger than the negatives'


data = list(map(int, input().split()))

print(numbers(*data))
