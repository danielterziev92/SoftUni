row_number = int(input())
number_list = []
for row_number in range(row_number):
    number = input()
    number_list.append(int(number))
print ('Max number:', max(number_list))
print ('Min number:', min(number_list))