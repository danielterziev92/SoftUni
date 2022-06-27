third_range = int(input())
fourth_range = int(input())
count_password = int(input())
for all_password in range(count_password):
    for first_letter in range(35, 55):
        for second_letter in range(64, 96):
            for third_letter in range(1,third_range+1):
                for fourth_letter in range(1,fourth_range+1):
                    if count_password > 0:
                        print(f'{chr(first_letter)}{chr(second_letter)}{third_letter}{fourth_letter}{chr(second_letter)}{chr(first_letter)}', end='|')
                        count_password -= 1
                        if first_letter >= 55:
                            first_letter = 35
                        else:
                            first_letter += 1
                        if second_letter >= 96:
                            second_letter = 64
                        else:
                            second_letter += 1
                    else:
                        exit()
            exit()