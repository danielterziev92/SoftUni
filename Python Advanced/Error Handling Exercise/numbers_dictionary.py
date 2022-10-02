import sys
from io import StringIO

test1 = '''one
1
two
2
Search
one
Remove
two'''

test2 = '''one
two
Search
Remove
End'''

test3 = '''one
1
Search
one
Remove
two
End'''

sys.stdin = StringIO(test3)

# Task start from here

numbers_dictionary = {}
line = input()

while line != "Search":
    number_as_string = line
    try:
        number = int(input())
        numbers_dictionary[number_as_string] = number
    except ValueError:
        print('The variable number must be an integer')
    line = input()

line = input()

while line != "Remove":
    searched = line
    try:
        print(numbers_dictionary[searched])
    except KeyError:
        print('Number does not exist in dictionary')
    line = input()

line = input()

while line != "End":
    searched = line
    try:
        del numbers_dictionary[searched]
    except KeyError:
        print('Number does not exist in dictionary')
    try:
        line = input()
    except EOFError:
        break

print(numbers_dictionary)
