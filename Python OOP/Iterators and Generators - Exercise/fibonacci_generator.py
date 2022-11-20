def fibonacci():
    numb1 = 0
    numb2 = 1
    yield numb1
    yield numb2
    while True:
        result = numb1 + numb2
        yield result
        numb1, numb2 = numb2, result


generator = fibonacci()
for i in range(5):
    print(next(generator))
