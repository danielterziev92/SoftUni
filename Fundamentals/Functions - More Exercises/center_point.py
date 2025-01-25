from math import floor


def closer_coordinates(param_one, param_two):
    if param_one <= param_two:
        return f'({x1}, {x2})'
    elif param_two <= param_one:
        return f'({y1}, {y2})'


x1 = floor(float(input()))
x2 = floor(float(input()))
y1 = floor(float(input()))
y2 = floor(float(input()))
sum_x = abs(x1) + abs(x2)
sum_y = abs(y1) + abs(y2)
print(closer_coordinates(sum_x, sum_y))