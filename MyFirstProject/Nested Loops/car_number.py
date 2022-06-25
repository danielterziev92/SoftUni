start_number = int(input())
end_number = int(input())
for reg_number in range(1):
    for first_reg_number in range(start_number, end_number+1):
        for second_reg_number in range(start_number, end_number+1):
            for third_reg_number in range(start_number, end_number+1):
                for fourth_reg_number in range(start_number, end_number+1):
                    if first_reg_number % 2 == 0 and first_reg_number > fourth_reg_number and (third_reg_number+second_reg_number)%2 == 0 and fourth_reg_number % 2 != 0:
                        print(f'{first_reg_number}{second_reg_number}{third_reg_number}{fourth_reg_number}', end=' ')
                    elif first_reg_number % 2 != 0 and first_reg_number > fourth_reg_number and (third_reg_number+second_reg_number)%2 == 0 and fourth_reg_number % 2 == 0:
                        if fourth_reg_number % 2 == 0:
                            print(f'{first_reg_number}{second_reg_number}{third_reg_number}{fourth_reg_number}', end=' ')