def sum_numbers(number_one: int, number_two: int):
    return number_one + number_two


def subtract(number_three, summed_number):
    return summed_number - number_three


def add_and_subtract(number_one: int, number_two: int, number_three: int):
    summed_number = sum_numbers(number_one=number_one, number_two=number_two)
    return subtract(number_three=number_three, summed_number=summed_number)

first_number = int(input())
second_number = int(input())
third_number = int(input())
print(add_and_subtract(number_one=first_number, number_two=second_number, number_three=third_number))
