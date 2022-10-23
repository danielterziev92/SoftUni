def get_spaces(n, i):
    return ' ' * (n - 1 - i)


def get_symbols(n, i):
    return ('* ' * (i + 1)).strip()


def get_line_of_rhombus(n, i):
    return get_spaces(n, i) + get_symbols(n, i)


def get_middle_upper_part_of_rhombus(n):
    result = ''
    for i in range(n):
        result += get_line_of_rhombus(n, i) + '\n'
    return result


def get_middle_lower_part_of_rhombus(n):
    result = ''
    for i in range(n - 2, -1, -1):
        result += get_line_of_rhombus(n, i) + '\n'
    return result


def print_rhombus(n):
    print(get_middle_upper_part_of_rhombus(n), end='')
    print(get_middle_lower_part_of_rhombus(n), end='')


print_rhombus(int(input()))
