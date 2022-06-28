def prime(x, y):
    prime_list = []
    for i in range(x, y):
        if i == 0 or i == 1:
            continue
        else:
            for j in range(2, int(i / 2) + 1):
                if i % j == 0:
                    break
            else:
                prime_list.append(i)
    return prime_list

first_number = int(input())
second_number = int(input())
third_number = int(input())
first_pin_number = 0
second_pin_number = 0
third_pin_number = 0
for first_pin_number in range(1, first_number+1):
    if first_pin_number % 2 == 0:
        for second_pin_number in range(2, second_number + 1):
            prime_number = prime(2, second_number+1)
            if second_pin_number in prime_number:
                for third_pin_number in range(1, third_number+1):
                    if third_pin_number % 2 == 0:
                        print(f'{first_pin_number} {second_pin_number} {third_pin_number}')