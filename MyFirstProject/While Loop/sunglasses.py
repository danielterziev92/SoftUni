from math import ceil
number = int(input())
symbol_star = 2*number
row = number
last_row = 1
middle = ((number - 1)/2 -1)+2
while row > 0:
    if row == number or row == last_row:
        print((symbol_star * '*') + (number * ' ') + (symbol_star * '*'))
        row -= 1
    elif row < number:
        if number % 2 == 0:
            middle = ceil(middle)
            if row == middle:
                print('*' + (symbol_star - 2) * '/' + '*' + number * '|' + '*' + (symbol_star - 2) * '/' + '*')
                row -= 1
            elif row < middle or row > middle:
                print('*' + (symbol_star - 2) * '/' + '*' + number * ' ' + '*' + (symbol_star - 2) * '/' + '*')
                row -= 1
        else:
            if row == middle:
                print('*' + (symbol_star-2) * '/' + '*' + number * '|' + '*' + (symbol_star-2) * '/' + '*')
                row -= 1
            elif row < middle or row > middle:
                print('*' + (symbol_star-2) * '/' + '*' + number * ' ' + '*' + (symbol_star-2) * '/' + '*')
                row -= 1
    else:
        break