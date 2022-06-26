start_range = int(input())
end_range = int(input())
for current_number in range(start_range, end_range+1):
    sum_even_number = 0
    sum_odd_number = 0
    for count, index in enumerate(str(current_number)):
        if count % 2 == 0:
            sum_even_number += int(index)
        else:
            sum_odd_number += int(index)
    if sum_even_number == sum_odd_number:
        print(current_number, end=' ')