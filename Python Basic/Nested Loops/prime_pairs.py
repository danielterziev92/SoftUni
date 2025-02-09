def prime(y):
    prime_list = []
    for i in range(2, y):
        for j in range(2, int(i / 2) + 1):
            if i % j == 0:
                break
        else:
            prime_list.append(i)
    return prime_list
start_range_first_half = int(input())
start_range_second_half = int(input())
end_range_first_half = int(input())
end_range_second_half = int(input())
for first_half in range(start_range_first_half, start_range_first_half+end_range_first_half+1):
    for second_half in range(start_range_second_half, start_range_second_half+end_range_second_half+1):
        if first_half in prime(start_range_first_half+end_range_first_half+1) and second_half in prime(start_range_second_half+end_range_second_half+1):
            print(f'{first_half}{second_half}')