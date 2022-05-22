def time_of_first_car(slice: float, the_time: list):
    current_time = the_time[:slice]
    current_time = [int(n) for n in current_time]
    a_time = 0
    for i in range(len(current_time)):
        if 0 == current_time[i]:
            a_time *= 0.8
        else:
            a_time += current_time[i]
    return a_time


def time_of_second_car(slice: float, the_time: list):
    current_time = the_time[-slice:]
    current_time = [int(n) for n in current_time]
    current_time.reverse()
    a_time = 0
    for i in range(len(current_time)):
        if 0 == current_time[i]:
            a_time *= 0.8
        else:
            a_time += current_time[i]
    return a_time


all_times = input().split(' ')
a_side = int((len(all_times) - 1) / 2)
first_car_time = time_of_first_car(slice=a_side, the_time=all_times)
second_car_time = time_of_second_car(slice=a_side, the_time=all_times)
if first_car_time < second_car_time:
    print(f'The winner is left with total time: {first_car_time:.1f}')
else:
    print(f'The winner is right with total time: {second_car_time:.1f}')
