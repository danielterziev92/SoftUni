number = input()
first_number = int(number[-1])
second_number = int(number[-2])
third_number = int(number[-3])
for table in range(1):
    for first_number in range(1,first_number+1):
        for second_number in range(1,second_number+1):
            for third_number in range(1,third_number+1):
                print(f'{first_number} * {second_number} * {third_number} = {first_number*second_number*third_number};')