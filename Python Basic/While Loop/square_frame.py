number = int(input())
row_number = number
col_number = number
while number > 0:
    if row_number < 3:
        print(((row_number-1)*'+ ') + '+')
        number -=1
    elif row_number > 2:
        if col_number == 2 or col_number == number:
            print('+ ' + ((row_number-2)*'- ') + '+' )
        else:
            print('| ' + ((row_number - 2) * '- ') + '|')
            col_number -= 1
        number -= 1
    else:
        break