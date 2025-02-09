input_numbers = int(input())
row_number = input_numbers
number_list = []
for input_numbers in range(input_numbers*2):
    number = input()
    number_list.append(int(number))
left_half = number_list[:row_number]
right_half = number_list[row_number:]
if sum(left_half) == sum(right_half):
    amount = sum(left_half)
    print(f'Yes, sum = {amount}')
elif sum(left_half) > sum(right_half):
    diff = (sum(left_half) - sum(right_half))
    print(f'No, diff = {diff}')
elif sum(right_half) > sum(left_half):
    diff = (sum(right_half) - sum(left_half))
    print(f'No, diff = {diff}')