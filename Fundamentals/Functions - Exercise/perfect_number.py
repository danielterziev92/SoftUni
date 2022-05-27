def is_perfect_number(number: int):
    sum_of_index = 0
    for i in range(1, number+1):
        if number % i == 0:
            sum_of_index += i
    if sum_of_index / 2 == number:
        return 'We have a perfect number!'
    else:
        return "It's not so perfect."


current_number = int(input())
print(is_perfect_number(number=current_number))
