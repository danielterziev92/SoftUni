number = int(input())
answer = ''
for i in range(1111,9999):
    special_count = 0
    for count, item in enumerate(str(i)):
        if item != '0':
            if number % int(item) == 0:
                special_count += 1
    if special_count == 4:
        print(i, end=' ')