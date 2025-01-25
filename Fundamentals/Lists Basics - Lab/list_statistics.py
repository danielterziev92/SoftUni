numb = int(input())
positive_number = []
negative_number = []
for i in range(numb):
    current_number = int(input())
    if current_number >= 0:
        positive_number.append(current_number)
    else:
        negative_number.append(current_number)
print(positive_number)
print(negative_number)
print(f'Count of positives: {len(positive_number)}')
print(f'Sum of negatives: {sum(negative_number)}')