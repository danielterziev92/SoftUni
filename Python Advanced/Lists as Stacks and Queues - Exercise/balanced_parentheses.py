import sys
from io import StringIO

test1 = '{[()]}'

test2 = '{[(])}'

test3 = '{{[[(())]]}}'

test4 = '(){}[]'

test5 = '{()([[][]]){}}'

# sys.stdin = StringIO(test5)

inputs = input()
is_balanced = True
result = []
for ch in inputs:
    if ch in '{([':
        result.append(ch)
    else:
        if len(result) == 0:
            is_balanced = False
            break
        last_ch = result.pop()
        if f'{last_ch}{ch}' not in '(){}[]':
            is_balanced = False
            break

if is_balanced and len(result) == 0:
    print('YES')
else:
    print('NO')