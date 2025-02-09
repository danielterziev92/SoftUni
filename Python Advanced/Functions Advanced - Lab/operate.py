def operate(operator, *args):
    def add(*args):
        return sum(args)

    def subtract(*args):
        numbs = [x for x in args]
        result = numbs.pop(0)
        for numb in numbs:
            result -= numb
        return result


    def multiplication(*args):
        result = 1
        for numb in args:
            result *= numb
        return result

    def division(*args):
        numbs = [x for x in args]
        result = numbs.pop(0)
        for numb in numbs:
            result /= numb
        return result

    operators = {
        '+': add,
        '-': subtract,
        '*': multiplication,
        '/': division,
    }

    return operators[operator](*args)


print(operate("+", 1, 2, 3))
print(operate("*", 3, 4))
print(operate('/', 10, 2))
print(operate('-', 10, 2))