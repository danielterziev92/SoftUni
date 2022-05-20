number_of_loop = int(input())
for i in range(number_of_loop):
    secret_code = int(input())
    if secret_code == 88:
        print('Hello')
    elif secret_code == 86:
        print('How are you?')
    elif secret_code < 88 and secret_code != 86:
        print('GREAT!')
    elif secret_code > 88:
        print("Bye.")
