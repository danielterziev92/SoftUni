list_of_numbers = input().split(' ')
numb = int(input())
count = numb
print('[', end='')
while len(list_of_numbers) > 1:
    count -= 1
    while count >= len(list_of_numbers):
        count -= len(list_of_numbers)
    print(list_of_numbers.pop(count), end=',')
    count += numb
print(f'{list_of_numbers[0]}]')