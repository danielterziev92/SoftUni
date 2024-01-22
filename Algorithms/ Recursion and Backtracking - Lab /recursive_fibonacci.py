def recursive_fibonacci(n):
    if n <= 1:
        return 1
    else:
        return recursive_fibonacci(n - 1) + recursive_fibonacci(n - 2)


def iterable_fibonacci(n):
    a = 1
    b = 1
    result = 0
    for _ in range(n - 1):
        result = a + b
        a, b = b, result

    return result


n = int(input())
print(iterable_fibonacci(n))
print(recursive_fibonacci(n))
