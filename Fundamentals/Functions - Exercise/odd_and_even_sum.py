def all_digits(number):
    odd_digits = 0
    even_digits = 0
    for i in range(len(number)):
        if int(number[i]) % 2 == 0:
            even_digits += int(number[i])
        else:
            odd_digits += int(number[i])
    the_digits = [odd_digits, even_digits]
    return the_digits


current_number = input()
odd_digits = all_digits(number=current_number)[0]
even_digits = all_digits(number=current_number)[1]
print(f'Odd sum = {odd_digits}, Even sum = {even_digits}')
