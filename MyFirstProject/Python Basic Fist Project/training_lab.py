value_h = float(input())
value_w = float(input())
corridor = 100
work_space_w = 70
work_space_h = 120
door = 1
department = 2
value_w_meter = value_w * 100
value_h_meter = value_h * 100
count_place_w = (value_w_meter - corridor) // work_space_w
count_place_h = value_h_meter // work_space_h
total_count = count_place_w * count_place_h - department - door
print(total_count)