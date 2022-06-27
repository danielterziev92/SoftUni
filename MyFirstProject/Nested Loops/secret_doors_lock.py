def prime(x, y):
    prime_list = []
    for i in range(x, y):
        if i == 0 or i == 1:
            continue
        else:
            for j in range(2, int(i / 2) + 1):
                if i % j == 0:
                    break
            else:
                prime_list.append(i)
    return prime_list
end_range_first_number = int(input())
end_range_second_number = int(input())
end_range_third_number = int(input())
for first_number in range(1, end_range_first_number+1):
    if first_number % 2 == 0:
        for second_number in range(1, end_range_second_number+1):
            prime_nummber = prime(2, end_range_second_number+1)
            if second_number in prime_nummber:
                for third_number in range(1,end_range_third_number+1):
                    if third_number % 2 == 0:
                        print(f'{first_number} {second_number} {third_number}')
                    else: continue
            else: continue
    else: continue