def squares(n):
    numb = 1
    while numb <= n:
        yield numb ** 2
        numb += 1


print(list(squares(5)))
