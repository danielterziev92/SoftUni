def cache(func):
    fibonacci_numbs = {}

    def wrapper(numb):
        if numb in fibonacci_numbs:
            return fibonacci_numbs[numb]
        result = func(numb)
        fibonacci_numbs[numb] = result
        return result

    wrapper.log = fibonacci_numbs
    return wrapper


@cache
def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


fibonacci(3)
print(fibonacci.log)

fibonacci(4)
print(fibonacci.log)
