def calculation(operator, first_number, second_number):
    if operator == 'multiply':
        return first_number * second_number
    elif operator == 'divide':
        return int(first_number/second_number)
    elif operator == 'add':
        return first_number + second_number
    elif operator == 'subtract':
        return first_number - second_number


operator = input()
first_number = int(input())
second_number = int(input())
print(calculation(operator=operator, first_number=first_number, second_number=second_number))
