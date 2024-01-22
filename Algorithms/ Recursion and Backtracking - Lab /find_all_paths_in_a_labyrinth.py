import sys
from io import StringIO

test1 = '''3
3
---
-*-
--e
'''

test2 = '''3
5
-**-e
-----
*****
'''

sys.stdin = StringIO(test2)


def print_path(movies):
    print(''.join(movies))


def add_move(labyrinth, row, col, direction, movies):
    labyrinth[row][col] = '*'
    movies.append(direction)


def remove_move(labyrinth, row, col, movies):
    labyrinth[row][col] = '-'
    movies.pop()


def find_path_in_a_labyrinth(labyrinth, row=0, col=0, direction='', movies=[]):
    if row < 0 or row >= len(labyrinth) or col < 0 or col >= len(labyrinth[0]):
        return

    if labyrinth[row][col] == 'e':
        movies.append(direction)
        print_path(movies)
        movies.pop()
        return

    if labyrinth[row][col] == '*':
        return

    add_move(labyrinth, row, col, direction, movies)

    find_path_in_a_labyrinth(labyrinth, row, col - 1, 'L', movies)
    find_path_in_a_labyrinth(labyrinth, row, col + 1, 'R', movies)
    find_path_in_a_labyrinth(labyrinth, row - 1, col, 'U', movies)
    find_path_in_a_labyrinth(labyrinth, row + 1, col, 'D', movies)

    remove_move(labyrinth, row, col, movies)


rows, cols = int(input()), int(input())
matrix = [list(input()) for _ in range(rows)]

find_path_in_a_labyrinth(matrix)
