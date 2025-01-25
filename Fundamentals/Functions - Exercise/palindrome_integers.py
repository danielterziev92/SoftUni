def reverse(str):
   return str[::-1]


current_numbers = input().split(', ')
for i in range(len(current_numbers)):
   print(bool(current_numbers[i] == reverse(current_numbers[i])))