def genrange(start, end):
    numb = start
    while numb <= end:
        yield numb
        numb += 1


print(list(genrange(1, 10)))
