import sys
from io import StringIO

test1 = '''20, 13, -7, 7
10, 5, 20, 15, 7, 9'''

test2 = '''2, 4, 7, 8, 0
5, 6, 2'''

test3 = '''12, 23
28, 40'''

sys.stdin = StringIO(test3)

from collections import deque

eggs_size = deque(map(int, input().split(', ')))
pieces_of_papers = deque(map(int, input().split(', ')))
box = 0

while eggs_size and pieces_of_papers:
    egg = eggs_size.popleft()

    if egg <= 0 or egg == 13:
        if egg == 13:
            last_paper = pieces_of_papers.pop()
            first_paper = pieces_of_papers.popleft()
            pieces_of_papers.appendleft(last_paper)
            pieces_of_papers.append(first_paper)
        continue

    paper = pieces_of_papers.pop()

    if egg + paper <= 50:
        box += 1

if box >= 1:
    print(f'Great! You filled {box} boxes.')
else:
    print(f"Sorry! You couldn't fill any boxes!")

if eggs_size:
    print(f'Eggs left: {", ".join(map(str, eggs_size))}')
if pieces_of_papers:
    print(f'Pieces of paper left: {", ".join(map(str, pieces_of_papers))}')
