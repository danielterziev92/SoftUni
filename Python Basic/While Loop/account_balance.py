contribution = input()
total = 0
while contribution != 'NoMoreMoney':
    current_contribution = float(contribution)
    if current_contribution < 0:
        print('Invalid operation!')
        break
    print(f'Increase: {current_contribution:.2f}')
    total += current_contribution
    contribution = input()
print(f'Total: {total:.2f}')