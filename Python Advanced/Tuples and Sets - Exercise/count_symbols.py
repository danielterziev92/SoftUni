import sys
from io import StringIO

test1 = '''SoftUni rocks'''
test2 = '''Why do you like Python?'''

sys.stdin = StringIO(test2)

import collections

occurrences = dict()
for ch in input():
    if ch not in occurrences:
        occurrences[ch] = 0
    occurrences[ch] += 1

sorted_occ = collections.OrderedDict(sorted(occurrences.items()))
for ch, count in sorted_occ.items():
    print(f'{ch}: {count} time/s')
