number = int(input())
last_number = number
count = 1
for row in range(1, number+1):
    for col in range(1, row+1):
        print(f'{count}', end=' ')
        count += 1
        if count == last_number+1:
            exit()
    print()
