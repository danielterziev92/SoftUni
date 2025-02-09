import sys
from io import StringIO

test1 = '''17K, 20B, 3C, 15D, 31Z, 28F
20, 35, 15, 3, 2, 10
1, 15, 64, 53, 45, 46'''
test2 = '''25A, 16B, 44T, 49D, 27M, 44F
25, 3, 31, 49, 26, 13
10, 15, 44, 40'''
test3 = '''15C, 25C, 36C, 43P, 40E, 38G
15, 25, 80, 40, 15, 99, 52
15, 42, 29'''

sys.stdin = StringIO(test3)

from collections import deque

seats = input().split(', ')
left_numbers = deque(map(int, input().split(', ')))
right_numbers = deque(map(int, input().split(', ')))
seat_matches = list()
rotation = 0
while len(seat_matches) != 3 and rotation != 10:
    left_numb = left_numbers.popleft()
    right_numb = right_numbers.pop()
    ascii_sum_numbs = chr(left_numb + right_numb)
    left_ascii_numb = f'{left_numb}{ascii_sum_numbs}'
    right_ascii_numb = f'{right_numb}{ascii_sum_numbs}'

    if left_ascii_numb in seats:
        seats.remove(left_ascii_numb)
        seat_matches.append(left_ascii_numb)
    elif right_ascii_numb in seats:
        seats.remove(right_ascii_numb)
        seat_matches.append(right_ascii_numb)

    if left_ascii_numb not in seat_matches and right_ascii_numb not in seat_matches:
        left_numbers.append(left_numb)
        right_numbers.appendleft(right_numb)

    rotation += 1

print(f'Seat matches: {", ".join(seat_matches)}')
print(f'Rotations count: {rotation}')