string_of_integer = input().split(', ')
count_of_beggars = int(input())
sum_of_beggars = []
for beggar in range(1,count_of_beggars+1):
    sum_begger = 0
    for i in range(beggar, len(string_of_integer) + 1, count_of_beggars):
        sum_begger += int(string_of_integer[i-1])
    sum_of_beggars.append(sum_begger)
print(sum_of_beggars)