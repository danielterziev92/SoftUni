end_range = int(input())
for first_char in range(97, 97 + end_range):
    for second_char in range(97, 97 + end_range):
        for third_char in range(97, 97 + end_range):
            print(f'{chr(first_char)}{chr(second_char)}{chr(third_char)}')