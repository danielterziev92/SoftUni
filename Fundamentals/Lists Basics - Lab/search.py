loop_number = int(input())
filter_word = input()
filtered_strings = []
all_string =[]
for i in range(loop_number):
    current_string = input()
    if filter_word in current_string:
        filtered_strings.append(current_string)
    all_string.append(current_string)
print(all_string)
print(filtered_strings)