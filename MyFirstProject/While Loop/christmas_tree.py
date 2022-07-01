number = int(input())
count_row = number
count_blank_space = 0
count_star = 1
residue_number = number - 1
while count_star <=  number:
    if count_blank_space == 0:
        print(((number+1) * ' ') + '|')
        count_blank_space += 1
    elif count_blank_space > 0:
        if count_star == number:
            print((count_star * '*') + ' ' + '|' + ' ' + (count_star * '*'))
            break
        print(((number- count_blank_space) * ' ') + (count_star * '*') + ' ' + '|' + ' ' + (count_star * '*'))
        count_star += 1
        count_blank_space += 1
    else:
        break