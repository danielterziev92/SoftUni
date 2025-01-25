loop_number = int(input())
all_numbers = []
for i in range(loop_number):
    current_number = int(input())
    all_numbers.append(current_number)
command = input()
if command == 'even':
    filtered_number = [x for x in all_numbers if x % 2 == 0]
    print(filtered_number)
elif command == 'odd':
    filtered_number = [x for x in all_numbers if x % 2 != 0]
    print(filtered_number)
elif command == 'negative':
    filtered_number = [x for x in all_numbers if x < 0]
    print(filtered_number)
elif command == 'positive':
    filtered_number = [x for x in all_numbers if x >= 0]
    print(filtered_number)