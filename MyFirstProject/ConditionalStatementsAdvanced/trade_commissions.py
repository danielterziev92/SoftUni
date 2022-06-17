city = input()
amount = float(input())
def Sofia(amount):
    if 0 <= amount <= 500:
        commission = 0.05
        print(f'{amount * commission:.2f}')
    elif 501 <= amount <= 1000:
        commission = 0.07
        print(f'{amount * commission:.2f}')
    elif 1001 <= amount <= 10000:
        commission = 0.08
        print(f'{amount * commission:.2f}')
    elif amount >= 10000:
        commission = 0.12
        print(f'{amount * commission:.2f}')

def Varna(amount):
    if 0 <= amount <= 500:
        commission = 0.045
        print(f'{amount * commission:.2f}')
    elif 501 <= amount <= 1000:
        commission = 0.075
        print(f'{amount * commission:.2f}')
    elif 1001 <= amount <= 10000:
        commission = 0.1
        print(f'{amount * commission:.2f}')
    elif amount >= 10000:
        commission = 0.13
        print(f'{amount * commission:.2f}')

def Plovdiv(amount):
    if  0 <= amount <= 500:
        commission = 0.055
        print(f'{amount * commission:.2f}')
    elif 501 <= amount <= 1000:
        commission = 0.08
        print(f'{amount * commission:.2f}')
    elif 1001 <= amount <= 10000:
        commission = 0.12
        print(f'{amount * commission:.2f}')
    elif amount >= 10000:
        commission = 0.145
        print(f'{amount * commission:.2f}')

if city == 'Sofia' and amount > 0:
    Sofia(amount)
elif city == 'Plovdiv' and amount > 0:
    Plovdiv(amount)
elif city == 'Varna' and amount > 0:
    Varna(amount)
else:
    print('error')