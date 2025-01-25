def loading_bar(number: int):
    symbols = (number // 10)
    result = f'{number}% [{symbols* "%"}{(10-symbols)*"."}]'
    if symbols < 10:
        print(result)
        return ('Still loading...')
    else:
        print(f'{number}% Complete!')
        return f'[{symbols * "%"}]'


current_number = int(input())
print(loading_bar(number=current_number))