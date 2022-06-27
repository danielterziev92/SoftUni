number = input()
prime_number = 0
non_prime_number = 0
while number != 'stop':
    number = int(number)
    if number < 0 :
        print('Number is negative.')
    else:
        for i in range(2, int(number/2)+1):
            if (number % i) == 0:
                non_prime_number += number
                break
        else:
            prime_number += number
    number = input()
print(f'Sum of all prime numbers is: {prime_number}')
print(f'Sum of all non prime numbers is: {non_prime_number}')