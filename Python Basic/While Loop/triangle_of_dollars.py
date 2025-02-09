number = int(input())
first_row = 1
while first_row <= number:
    row = ((first_row-1)*'$ ') + '$'
    print(row)
    first_row += 1