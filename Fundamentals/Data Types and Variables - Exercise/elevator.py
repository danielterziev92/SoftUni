numb_of_people = int(input())
capacity = int(input())
count = 0
while numb_of_people > capacity:
    numb_of_people -= capacity
    count += 1
print(f'{count+1}')