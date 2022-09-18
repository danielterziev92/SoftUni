import sys
from io import StringIO

test1 = '''1 2 3 4 5
1 2 3
3
Add First 5 6
Remove Second 8 9 11
Check Subset
'''
test2 = '''5 4 2 9 9 5 4
1 1 1 5 6 5
4
Add First 5 6 9 3
Add Second 1 2 3 3 3
Check Subset
Remove Second 1 2 3 4 5
'''

sys.stdin = StringIO(test2)

from collections import deque

first_sequence = set(map(int, input().split()))
second_sequence = set(map(int, input().split()))
count = int(input())
for _ in range(count):
    commands = deque(input().split())
    first_command, second_command = commands.popleft(), commands.popleft()
    if first_command == 'Add':
        additional_numbers = commands
        if second_command == 'First':
            first_sequence = first_sequence.union([int(x) for x in additional_numbers])
        else:
            second_sequence = second_sequence.union([int(x) for x in additional_numbers])
    elif first_command == 'Remove':
        additional_numbers = commands
        if second_command == 'First':
            first_sequence = first_sequence.difference([int(x) for x in additional_numbers])
        else:
            second_sequence = second_sequence.difference([int(x) for x in additional_numbers])
    elif first_command == 'Check':
        print(first_sequence.issubset(second_sequence) or second_sequence.issubset(first_sequence))

print(*sorted(first_sequence), sep=', ')
print(*sorted(second_sequence), sep=', ')
