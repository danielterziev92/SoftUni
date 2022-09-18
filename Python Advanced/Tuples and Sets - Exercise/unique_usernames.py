import sys
from io import StringIO

test1 = '''6
George
George
George
Peter
George
NiceGuy1234'''
test2 = '''10
Peter
Maria
Peter
George
Steve
Maria
Alex
Peter
Steve
George'''


sys.stdin = StringIO(test2)

usernames = set()
for _ in range(int(input())):
    username = input()
    usernames.add(username)
[print(username) for username in usernames]
