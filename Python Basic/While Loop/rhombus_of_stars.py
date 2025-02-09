number = int(input())
seconde_number = number
col_number = number
count_star = 1
residue_number = number - 1
while seconde_number > 0:
    if number == 1:
        print('*')
        break
    if col_number > 0 and count_star == 1:
        print((residue_number * ' ')+ (count_star * '*'))
        count_star += 1
        col_number -= 1
    elif col_number > 0 and count_star > 1:
        residue_number -= 1
        print((residue_number * ' ') + ((count_star-1) * '* ') + '*')
        count_star += 1
        col_number -= 1
    elif col_number < abs(number):
        if seconde_number == 1:
            break
        seconde_number -= 1
        residue_number -= 1
        count_star -= 1
        col_number -= 1
        print((abs(residue_number) * ' ') + ((count_star - 1) * '* '))
    else:
        break