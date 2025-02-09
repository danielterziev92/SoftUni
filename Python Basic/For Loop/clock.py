count_numbers = int(input())
all_number_list = []
for count_numbers in range(count_numbers):
    first_number = int(input())
    second_number = int(input())
    all_number_list.append(first_number + second_number)
if all(elements == all_number_list[0] for elements in all_number_list) == True:
    print(f'Yes, value={all_number_list[0]}')
else:
    new_list = [all_number_list[-1],all_number_list[-2]]
    max_value = max(new_list)
    min_value = min(new_list)
    print(f'No, maxdiff={max_value - min_value}')