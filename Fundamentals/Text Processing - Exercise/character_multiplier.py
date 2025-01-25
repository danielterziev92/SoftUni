def sum_of_char_code(first, second):
    total_sum = 0
    for i in range(len(first)):
        total_sum += ord(first[i]) * ord(second[i])
    for i in range(len(first), len(second)):
        total_sum += ord(second[i])
    return total_sum



two_string = input().split()
first_word = two_string[0]
second_word = two_string[1]
if len(first_word) > len(second_word):
    print(sum_of_char_code(second_word, first_word))
else:
    print(sum_of_char_code(first_word, second_word))