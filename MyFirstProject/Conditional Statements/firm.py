import math
needed_hours = int(input())
day_for_work = int(input())
qty_employers = int(input())
work_day = 8 - (8 * 0.1)
after_working_time = 2
total_working_time = math.floor(day_for_work * work_day) + (qty_employers*(after_working_time * day_for_work))
if needed_hours > total_working_time:
    print(f'Not enough time!{needed_hours-total_working_time} hours needed.')
elif total_working_time >= needed_hours:
    print(f'Yes!{total_working_time - needed_hours} hours left.')