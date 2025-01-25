number = int(input())
current_number = 0
for current_number in range(number+1):
    print(current_number*'*')
for current_number in range(number-1, -1, -1):
    print(current_number*'*')
