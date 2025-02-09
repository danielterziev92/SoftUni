count = int(input())
num_list = []
for count in range(count):
    num = int(input())
    num_list.append(num)
max_value = max(num_list)
num_list.remove(max_value)
if (sum(num_list))== max_value:
    print('Yes')
    print(f'Sum = {max_value}')
else:
    print('No')
    if max_value > sum(num_list):
        print(f'Diff = {max_value - sum(num_list)}')
    else:
        print(f'Diff = {sum(num_list) - max_value}')