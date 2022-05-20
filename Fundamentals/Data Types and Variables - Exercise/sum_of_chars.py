numb = int(input())
total_amount = 0
for i in range(numb):
    char = input()
    total_amount += ord(char)
print(f'The sum equals: {total_amount}')