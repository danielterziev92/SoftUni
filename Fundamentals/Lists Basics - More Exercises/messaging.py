the_numbers = input().split(' ')
the_string = list(tuple(input()))
result = []
for i in range(len(the_numbers)):
    the_number = 0
    for i2 in range(len(the_numbers[i])):
        the_number += int(the_numbers[i][i2])
    result.append(the_number)
for i in range(len(result)):
    if result[i] > len(the_string):
        result[i] -= len(the_string)
        print(the_string.pop(result[i]), end='')
    else:
        print(the_string.pop(result[i]), end='')