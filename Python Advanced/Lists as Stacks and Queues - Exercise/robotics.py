import sys
from io import StringIO

test1 = """ROB-15;SS2-10;NX8000-3
8:00:00
detail
glass
wood
apple
End
"""

test2 = """ROB-8
7:59:59
detail
glass
wood
sock
End"""

sys.stdin = StringIO(test2)

from collections import deque
from math import floor


def hours_to_second(input_time):
    hours, minutes, seconds = map(int, input_time.split(':'))
    return hours * 3600 + minutes * 60 + seconds


def seconds_to_hours(seconds):
    seconds %= (24 * 60 * 60)
    hours = seconds // 3600
    minutes = floor((seconds / 60) % 60)
    seconds = seconds % 60
    return f'{hours:02d}:{minutes:02d}:{seconds:02d}'


robots_input = input().split(';')
robots_info = {}
input_time = input()
current_time = hours_to_second(input_time)

for robot in robots_input:
    robot_name, process_time = robot.split('-')
    robots_info[robot_name] = {'process_time': int(process_time), 'end_time': 0}

products = deque()
while True:
    line = input()
    if line == 'End':
        break
    products.append(line)

while products:
    current_product = products.popleft()
    current_time += 1
    is_robot_get_product = False
    for robot in robots_info:
        if current_time >= robots_info[robot]['end_time']:
            robots_info[robot]['end_time'] = robots_info[robot]['process_time'] + current_time
            is_robot_get_product = True
            print(f'{robot} - {current_product} [{seconds_to_hours(current_time)}]')

            break
    if not is_robot_get_product:
        products.append(current_product)