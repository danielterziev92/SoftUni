n = int(input())
l = int(input())
for first_letter in range(1, n):
    for second_letter in range(1, n):
        for third_letter in range(97, l+97):
            for fourth_letter in range(97, l+97):
                for fifth_letter in range(1, n+1):
                    if fifth_letter > first_letter and fifth_letter > second_letter:
                        print(f'{first_letter}{second_letter}{chr(third_letter)}{chr(fourth_letter)}{fifth_letter}', end=' ')