def rounds_number(list_of_number: list):
    list_of_number = [round(float(number)) for number in list_of_number]
    return list_of_number


current_numbers = input().split(' ')
print(rounds_number(list_of_number=current_numbers))