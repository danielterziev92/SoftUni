width_cake = int(input())
deep_cake = int(input())
amount_cake = width_cake * deep_cake
while amount_cake > 0:
    current_peace_type = input()
    if current_peace_type == 'STOP':
        break
    current_peace = int(current_peace_type)
    amount_cake -= current_peace
if amount_cake < 0 :
    print(f'No more cake left! You need {abs(amount_cake)} pieces more.')
else:
    print(f'{amount_cake} pieces are left.')