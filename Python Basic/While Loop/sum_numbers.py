number = int(input())
data = int(input())
all_numbers = data
while all_numbers < number:
    data = int(input())
    all_numbers += data
print(all_numbers)