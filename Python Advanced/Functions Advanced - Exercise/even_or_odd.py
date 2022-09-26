def even_odd(*args):
    data = list(args)
    command = data.pop()
    numbs = list(map(int, data))

    if command == 'even':
        result = []
        for numb in numbs:
            if numb % 2 == 0:
                result.append(numb)
        return result
    else:
        result = []
        for numb in numbs:
            if numb % 2 != 0:
                result.append(numb)
        return result


print(even_odd(1, 2, 3, 4, 5, 6, "even"))
print(even_odd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "odd"))
