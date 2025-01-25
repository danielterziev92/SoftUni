budget = int(input())
command = input()
while command != 'End':
    budget -= int(command)
    if budget < 0:
        print('You went in overdraft!')
        break
    command = input()
else:
    print('You bought everything needed.')
