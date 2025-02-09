import sys
from io import StringIO

test1 = '''Tom, Jerry
. . T . . .
. . . . . .
. . W . . .
. . W . . E
. . . . . .
. T . W . .
(3, 2)
(1, 3)
(5, 1)
(5, 1)'''

test2 = '''Jerry, Tom
. T . . . W
. . . . T .
. W . . . T
. T . E . .
. . . . . T
. . T . . .
(1, 1)
(3, 0)
(3, 3)'''

test3 = '''Jerry, Tom
. . . W . .
. . T T . .
. . . . . .
. T . W . .
W . . . E .
. . . W . .
(0, 3)
(3, 3)
(1, 3)
(2, 2)
(3, 5)
(4, 0)
(5, 3)
(3, 1)
(4, 4)
(4, 4)'''

sys.stdin = StringIO(test3)

first, second = input().split(', ')
the_maze = [[x for x in input().split()] for _ in range(6)]
stunned = {'name': []}
while True:

    player, loser = first, second
    row, col = [int(x) for x in list(input()) if x.isdigit()]

    if stunned['name'] and stunned['name'][0] == player:
        stunned['name'].pop(0)
        first, second = second, first
        continue

    if the_maze[row][col] == 'E':
        print(f'{player} found the Exit and wins the game!')
        break
    elif the_maze[row][col] == 'T':
        print(f'{player} is out of the game! The winner is {loser}.')
        break
    elif the_maze[row][col] == 'W':
        print(f'{player} hits a wall and needs to rest.')
        stunned['name'].append(player)

    first, second = second, first