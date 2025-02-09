count = 0
searching_book = input()
current_book = input()
while current_book != searching_book:
    if current_book == 'No More Books':
        print('The book you search is not here!')
        print(f'You checked {count} books.')
        exit()
    count += 1
    current_book = input()
print(f'You checked {count} books and found it.')