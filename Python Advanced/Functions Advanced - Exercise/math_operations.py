def math_operations(*args, **kwargs):
    args = list(map(float, reversed(args)))
    keys = list(x for x in kwargs.keys())
    inx = 0
    while args:
        value = args.pop()
        if inx == 4:
            inx = 0

        current_key = keys[inx]

        if current_key == 'a':
            kwargs[current_key] += value
        elif current_key == 's':
            kwargs[current_key] -= value
        elif current_key == 'd':
            kwargs[current_key] /= value if value != 0 else 1
        elif current_key == 'm':
            kwargs[current_key] *= value

        inx += 1

    sorted_kwargs = sorted(kwargs.items(), key=lambda x: (-x[1], x[0]))
    result = ''
    for key, value in sorted_kwargs:
        result += f'{key}: {value:.1f}\n'

    return result


print(math_operations(2.1, 12.56, 0.0, -3.899, 6.0, -20.65, a=1, s=7, d=33, m=15))
print(math_operations(-1.0, 0.5, 1.6, 0.5, 6.1, -2.8, 80.0, a=0, s=(-2.3), d=0, m=0))
print(math_operations(6.0, a=0, s=0, d=5, m=0))
