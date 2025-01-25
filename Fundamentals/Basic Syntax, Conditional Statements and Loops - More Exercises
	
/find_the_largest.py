numbers = list(input())
for number in range(len(numbers)):
    print(max(numbers), end='')
    numbers.remove(max(numbers))