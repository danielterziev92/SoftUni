num = int(input())
special_numbers = [5, 7, 11]
for n in range(1, num+1):
    if n < 10:
        print(f'{n} -> {bool(n in special_numbers)}')
    else:
        n = str(n)
        current_number = []
        for i in range(len(n)):
            current_number.append(int(n[i]))
        print(f'{n} -> {bool(sum(current_number) in special_numbers)}')