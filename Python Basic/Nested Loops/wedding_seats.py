end_sector = input()
count_row = int(input())
count_seat = int(input())
amount_seat = 0
for section in range(ord('A'), ord(end_sector)+1):
    count_row += 1
    for row in range(1,count_row):
        if row % 2 != 0:
            for seat in range(count_seat):
                amount_seat += 1
                print(f'{chr(section)}{row}{chr(97+seat)}')
        else:
            for seat in range((count_seat)+2):
                amount_seat += 1
                print(f'{chr(section)}{row}{chr(97+seat)}')
print(amount_seat)