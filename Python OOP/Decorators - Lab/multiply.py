def multiply(times):
    def decorator(function):
        def wrapper(numbers):
            result = 0
            for _ in range(times):
                result += function(numbers)
            return result

        return wrapper

    return decorator


@multiply(3)
def add_ten(number):
    return number + 10


print(add_ten(3))


@multiply(5)
def add_ten(number):
    return number + 10


print(add_ten(6))
