numb = int(input())
capacity = 255
total_value = 0
for i in range(numb):
    value = int(input())
    if capacity < value and capacity > 0:
        print('Insufficient capacity!')
    elif capacity >= value:
        capacity -= value
        total_value += value
print(f'{total_value}')