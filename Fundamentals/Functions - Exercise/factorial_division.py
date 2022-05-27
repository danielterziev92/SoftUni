def factorial(number_one: int, number_two: int):
    factorial_number_first_number = 1
    for i in range(1, number_one+1):
        factorial_number_first_number *= i
    factorial_number_second_number = 1
    for i in range(1, second_number + 1):
        factorial_number_second_number *= i
    result = f'{(factorial_number_first_number / factorial_number_second_number):.2f}'
    return result


first_number = int(input())
second_number = int(input())
print(factorial(number_one=first_number, number_two=second_number))
