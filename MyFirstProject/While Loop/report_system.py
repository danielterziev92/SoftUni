money = int(input())
count_pay = 1
amount_cash = 0
amount_pos = 0
avarage_cash = 0
avarage_pos = 0
while money > 0:
    price = input()
    if price == 'End':
        print('Failed to collect required money for charity.')
        exit()
    price = int(price)
    if count_pay%2 == 0:
        if price < 10: print('Error in transaction!')
        else:
            print('Product sold!')
            avarage_pos += 1
            amount_pos += price
            money -= price
        count_pay += 1
    else:
        if price > 100:
            print('Error in transaction!')
        else:
            print('Product sold!')
            avarage_cash += 1
            amount_cash += price
            money -= price
        count_pay += 1
if money <= 0:
    print(f'Average CS: {(amount_cash/avarage_cash):.2f}')
    print(f'Average CC: {(amount_pos/avarage_pos):.2f}')