import sys
from io import StringIO

test1 = '''3
0,3-1,2
2,10-3,5
6,15-3,10'''

test2 = '''5
0,10-2,5
3,8-1,7
1,8-2,4
4,7-2,5
1,10-2,11'''

sys.stdin = StringIO(test2)

count = int(input())
intersection = sorted(list())
for _ in range(count):
    info = input().split('-')
    first_start, first_end = list(map(int, info[0].split(',')))
    second_start, second_end = list(map(int, info[1].split(',')))
    first_loop = set([x for x in range(first_start, first_end+1)])
    second_loop = set([x for x in range(second_start, second_end+1)])
    current_intersection = first_loop.intersection(second_loop)
    if len(current_intersection) > len(intersection):
        intersection = current_intersection

print(f'Longest intersection is [{", ".join(map(str, intersection))}] with length {len(intersection)}')
