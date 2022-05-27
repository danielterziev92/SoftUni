import re
def is_digit(password: str):
    is_digit = 0
    for i in range(len(password)):
        if password[i].isdigit():
            is_digit += 1
    if 1 >= is_digit:
        print('Password must have at least 2 digits')
        return False
    return True


def is_enough_char(password: str):
    if not 6 <= len(password) <= 10:
        print('Password must be between 6 and 10 characters')
        return False
    return True


def is_alpha(password: str):
    regex = re.compile('[@_!#$%^&*()<>?/\|}{~:]')
    one_alpha_char = 0
    check_for_other_char = 0
    for i in range(len(password)):
        if password[i].isalpha():
            one_alpha_char += 1
        elif regex.search(password) != None:
            check_for_other_char += 1
        if check_for_other_char > 0 and one_alpha_char > 0:
            print('Password must consist only of letters and digits')
            return False
    return True


def is_valid(password: str):
    is_alpha_true = is_alpha(password)
    is_enough_char_true = is_enough_char(password)
    is_digit_true = is_digit(password)

    if is_alpha_true and is_enough_char_true and is_digit_true:
        print('Password is valid')


current_password = input()
is_valid(current_password)
