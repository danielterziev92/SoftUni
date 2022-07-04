number = int(input())
row_number = number
colum_number = number
while row_number > 0:
    col = ((colum_number-1) * '* ') + '*'
    print(col)
    row_number -= 1