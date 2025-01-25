from math import floor


def closer_coordinates(param_one: list, param_two: list):
    if param_one[0] <= param_two[0]:
        return True
    return False


def far_coordinates(param_one: list, param_two: list, param_three: list, param_four: list):
    if param_one[0] + param_two[0] >= param_three[0] + param_four[0]:
        if closer_coordinates(param_one=param_one, param_two=param_two):
            return f'({param_one[1]}, {param_one[2]})({param_two[1]}, {param_two[2]})'
        return f'({param_two[1]}, {param_two[2]})({param_one[1]}, {param_one[2]})'
    elif param_three[0] + param_four[0] >= param_one[0] + param_two[0]:
        if closer_coordinates(param_one=param_three, param_two=param_four):
            return f'({param_three[1]}, {param_three[2]})({param_four[1]}, {param_four[2]})'
        return f'({param_four[1]}, {param_four[2]})({param_three[1]}, {param_three[2]})'



x1 = floor(float(input()))
y1 = floor(float(input()))
x2 = floor(float(input()))
y2 = floor(float(input()))
x3 = floor(float(input()))
y3 = floor(float(input()))
x4 = floor(float(input()))
y4 = floor(float(input()))
sum_coord1 = abs(x1) + abs(y1)
sum_coord2 = abs(x2) + abs(y2)
sum_coord3 = abs(x3) + abs(y3)
sum_coord4 = abs(x4) + abs(y4)
coord1 = [sum_coord1, x1, y1]
coord2 = [sum_coord2, x2, y2]
coord3 = [sum_coord3, x3, y3]
coord4 = [sum_coord4, x4, y4]
print(far_coordinates(param_one=coord1, param_two=coord2, param_three=coord3, param_four= coord4))