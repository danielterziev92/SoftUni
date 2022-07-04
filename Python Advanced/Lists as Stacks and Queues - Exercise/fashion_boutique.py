box_of_clothes = input().split()
box_of_clothes = list(map(int, box_of_clothes))
rack_capacity = int(input())
current_rack = rack_capacity
count_rack = 1
while box_of_clothes:
    cloth = box_of_clothes.pop()
    if cloth > current_rack:
        count_rack += 1
        current_rack = rack_capacity
    current_rack -= cloth
print(count_rack)
