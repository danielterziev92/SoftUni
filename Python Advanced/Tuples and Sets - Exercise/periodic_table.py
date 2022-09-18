import sys
from io import StringIO

test1 = '''4
Ce O
Mo O Ce
Ee
Mo'''

test2 = '''3
Ge Ch O Ne
Nb Mo Tc
O Ne'''

sys.stdin = StringIO(test2)

chemical_elements = set()
count = int(input())
for _ in range(count):
    [chemical_elements.add(x) for x in input().split()]
[print(chemical_element) for chemical_element in chemical_elements]
