from string import ascii_lowercase

words = input().split()
total_sum = 0
for word in words:
    string_number = [numb for numb in word if numb.isdigit()]
    current_number = int("".join(string_number))
    sum_total = 0
    for i in range(len(word)):
        if word[i].isalpha():
            letter_number = ascii_lowercase.index(word[i].lower())
            if i == 0:
                if word[i].isupper():
                    sum_total = current_number / (letter_number + 1)
                else:
                    sum_total = current_number * (letter_number + 1)
            else:
                if word[i].isupper():
                    total_sum += sum_total - (letter_number + 1)
                else:
                    total_sum += sum_total + (letter_number + 1)
print(f"{total_sum:.2f}")