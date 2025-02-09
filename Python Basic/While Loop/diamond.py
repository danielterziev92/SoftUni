from math import ceil
number = int(input())
befor_middle_row = ceil(number / 2)
after_middle_row = number - befor_middle_row
symbol_star = 1
symbol_dash = number
middle_dash = 0
while befor_middle_row > 0:
    if 1 <= number <= 2:
        print(number * '*')
        exit()
    elif number >= 3:
        if number % 2 == 1:  # нечетно
            if middle_dash == 0:
                print(int(symbol_dash / 2) * '-' + symbol_star * '*' + int(symbol_dash / 2) * '-')
            elif middle_dash >= 1:
                print(round(symbol_dash / 2 - 1) * '-' + (symbol_star * '*') + middle_dash * '-' + (symbol_star * '*') + round(symbol_dash / 2 - 1) * '-')
                middle_dash += 1
                symbol_dash -= 1
            symbol_dash -= 1
            middle_dash += 1
            befor_middle_row -= 1
        elif number % 2 == 0:
            if middle_dash == 0:
                print(int(symbol_dash / 2 - 1) * '-' + (2 * symbol_star * '*') + int(symbol_dash / 2 - 1) * '-')
                symbol_dash -= 2
            elif middle_dash >= 1:
                print(ceil(symbol_dash / 2 - 1) * '-' + (symbol_star * '*') + middle_dash * '-' + (
                            symbol_star * '*') + ceil(symbol_dash / 2 - 1) * '-')
                symbol_dash -= 2
            middle_dash += 2
            befor_middle_row -= 1
        else:
            break
    else:
        break
symbol_dash += 2
middle_dash -= 2
while after_middle_row > 0:
    if number % 2 == 1:  # нечетно
        if after_middle_row > 1:
            symbol_dash += 2
            middle_dash -= 2
            print(round(symbol_dash / 2 - 1) * '-' + (symbol_star * '*') + middle_dash * '-' + (symbol_star * '*') + round(symbol_dash / 2 - 1) * '-')
        else:
            print(int(symbol_dash / 2) * '-' + symbol_star * '*' + int(symbol_dash / 2) * '-')
        after_middle_row -= 1
    elif number % 2 == 0:
        if after_middle_row > 1:
            symbol_dash += 2
            middle_dash -= 2
            print(ceil(symbol_dash / 2 - 1) * '-' + (symbol_star * '*') + middle_dash * '-' + (symbol_star * '*') + ceil(symbol_dash / 2 - 1) * '-')
        else:
            break
        after_middle_row -= 1
    else:
        break