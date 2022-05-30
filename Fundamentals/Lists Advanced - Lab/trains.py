wagons_number = int(input())
wagons = [0 for wagons in range(wagons_number)]
command = input().split(' ')
while command[0] != 'End':
    current_commnad = command[0]
    if current_commnad == 'add':
        value = int(command[1])
        wagons[-1] += value
    elif current_commnad == 'insert':
        index = int(command[1])
        value = int(command[2])
        wagons[index] += value
    elif current_commnad == 'leave':
        index = int(command[1])
        value = int(command[2])
        wagons[index] -= value
    command = input().split(' ')
print(wagons)
