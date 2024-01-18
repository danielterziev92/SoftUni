import sys
from io import StringIO

test1 = '2'
test2 = '5'

sys.stdin = StringIO(test2)


def get_symbol_count(numb, direction):
    symbol = '*' if direction == 'down' else '#'

    return numb * symbol


def drawing(numb, idx=0, direction='down', result=list()) -> list:
    if idx == 0:
        idx = numb

    if idx == 1 and direction == 'down':
        direction = 'up'
        result.append(get_symbol_count(idx, 'down'))
        return drawing(numb, idx, direction, result)

    elif idx == numb and direction == 'up':
        result.append(get_symbol_count(idx, direction))
        return result

    else:
        result.append(get_symbol_count(idx, direction))

    if direction == 'down':
        return drawing(numb, idx - 1, direction, result)
    else:
        return drawing(numb, idx + 1, direction, result)


input_numb = int(input())
[print(row) for row in drawing(input_numb)]
