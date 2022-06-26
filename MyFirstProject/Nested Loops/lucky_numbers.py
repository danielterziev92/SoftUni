number = int(input())
for a in range(1):
    for first_number in range(1, 10):
        for second_number in range(1, 10):
            for third_number in range(1, 10):
                for fourth_number in range(1, 10):
                    if (first_number + second_number) == (third_number + fourth_number):
                        lucky_number = first_number + second_number
                        if number%lucky_number == 0:
                            print(f'{first_number}{second_number}{third_number}{fourth_number}', end=' ')