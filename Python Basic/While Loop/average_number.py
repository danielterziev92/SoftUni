number = int(input())
amount = 0
count = 0
for numbers in range(number):
    current_number = int(input())
    amount += current_number
    count += 1
print(f'{amount/count:.2f}')