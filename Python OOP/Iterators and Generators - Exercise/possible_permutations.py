import itertools


def possible_permutations(items):
    numbs = itertools.permutations(items)
    for numb in numbs:
        yield list(numb)


[print(n) for n in possible_permutations([1, 2, 3])]
