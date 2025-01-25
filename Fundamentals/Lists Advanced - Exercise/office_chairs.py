room_numbers = int(input())

count_free_chairs = 0
is_all_chairs_enough = True

for room in range(1, room_numbers + 1):
    data = input().split(' ')
    visitors = int(data[1])
    chair_have_in_room = len([chair for chair in data[0] if chair == 'X'])
    left_chair = abs(chair_have_in_room - visitors)
    if chair_have_in_room < visitors:
        print(f'{left_chair} more chairs needed in room {room}')
        is_all_chairs_enough = False
    else:
        count_free_chairs += left_chair

if is_all_chairs_enough:
    print(f'Game On, {count_free_chairs} free chairs left')