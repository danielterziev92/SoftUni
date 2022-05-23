string_of_integer = input().split(' ')
list_of_integer = []
for i in range(len(string_of_integer)):
    index = string_of_integer[i]
    list_of_integer.append(int(index))
count_of_rem_number = int(input())
for i in range(count_of_rem_number):
    minimun_number = min(list_of_integer)
    list_of_integer.remove(minimun_number)
for i in range(len(list_of_integer)-1):
    print(list_of_integer[i], end=', ')
print(list_of_integer[-1])