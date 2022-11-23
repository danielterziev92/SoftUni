def is_prime(number):
    if number <= 1:
        return False
    result = True
    for i in range(2, number):
        if (number % i) == 0:
            result = False
            break

    return result


def get_primes(numbers):
    for numb in numbers:
        if is_prime(numb):
            yield numb


print(list(get_primes([2, 4, 3, 5, 6, 9, 1, 0])))
