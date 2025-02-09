import sys
from io import StringIO

test1 = '''d yel blu e low redd'''
test2 = '''r ue nge ora bl ed'''
test3 = '''re ple blu pop e pur d'''

sys.stdin = StringIO(test2)

from collections import deque

data = deque(input().split())
colors = ['red', 'yellow', 'blue']
second_colors = {
    'orange': ['red', 'yellow'],
    'purple': ['red', 'blue'],
    'green': ['yellow', 'blue']
}
matched_colors = []

while data:
    left = data.popleft()
    right = data.pop() if data else ''

    if (left + right) in colors or (left + right) in second_colors:
        matched_colors.append(left + right)

    elif (right + left) in colors or (right + left) in second_colors:
        matched_colors.append((right + left))
    else:
        left, right = left[:-1], right[:-1]
        if left:
            data.insert(len(data) // 2, left)
        if right:
            data.insert(len(data) // 2, right)

for index, color in enumerate(matched_colors):
    if color in second_colors:
        if second_colors[color][0] not in matched_colors or second_colors[color][1] not in matched_colors:
            matched_colors.remove(color)

print(matched_colors)