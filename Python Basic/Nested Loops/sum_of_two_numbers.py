start = int(input())
end = int(input())
magic_number = int(input())
count = 0
first_comb = 0
second_comb = 0
for first_comb in range(start, end+1):
    for second_comb in range(start, end+1):
        count += 1
        if (first_comb + second_comb) == magic_number:
            print(f'Combination N:{count} ({first_comb} + {second_comb} = {magic_number})')
            exit()
        second_comb += 1
if (first_comb + second_comb) != magic_number:
    print(f'{count} combinations - neither equals {magic_number}')