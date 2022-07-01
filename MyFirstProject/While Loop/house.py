from math import ceil
number = int(input())
row = number
row_roof = ceil(number/2)
row_house = number - row_roof
first_row_roof = (number+1)/2
first_row_hause = (number/2)-1
symbol_star = 1
symbol_down = number - symbol_star
while row_roof > 0:
    if first_row_roof % 1 == 0:
        if row_roof > 1:
            print(int(symbol_down/2)*'-' + symbol_star*'*'+int(symbol_down/2)*'-')
            symbol_star += 2
            symbol_down -= 2
            row_roof -= 1
        else:
            print(number*'*')
            row_roof -= 1
    elif first_row_roof % 1 != 0:
        symbol_star += 1
        if row_roof > 1:
            print(int(symbol_down / 2) * '-' + symbol_star * '*' + int(symbol_down / 2) * '-')
            symbol_star += 1
            symbol_down -= 2
            row_roof -= 1
        else:
            print(number * '*')
            row_roof -= 1
    else:
        break
while row_house > 0:
    if row_house > 0:
        print('|' + int(number-2)*'*' + '|')
        row_house -= 1
    else:
        break