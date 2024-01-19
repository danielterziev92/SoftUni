import sys
from io import StringIO

test1 = '3'
test2 = '5'

sys.stdin = StringIO(test1)


def generate_vector(list_of_numbers, ind):
    if ind >= len(list_of_numbers):
        print(*list_of_numbers, sep='')
        return

    for i in range(2):
        list_of_numbers[ind] = i
        generate_vector(list_of_numbers, ind + 1)


input_numb = int(input())
generate_vector([0] * input_numb, 0)
