sequence_of_numbers = list(map(int, input().split(' ')))
average_number = sum(sequence_of_numbers) / len(sequence_of_numbers)
greater_then_aver_numbers = []
for number in sequence_of_numbers:
    if number > average_number:
        greater_then_aver_numbers.append(number)
greater_then_aver_numbers.sort(reverse=True)
result = ' '.join(list(map(str, greater_then_aver_numbers[:5])))
if result:
    print(result)
else:
    print('No')