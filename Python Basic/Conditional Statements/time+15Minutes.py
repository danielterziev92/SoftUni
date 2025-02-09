hours = int(input())
minutes = int(input())
bonus_time = 15
if minutes >= 45:
    hours = (hours + 1) % 24
    minutes = (minutes + bonus_time) % 60
    if minutes < 10:
        print(f'{hours}:0{minutes:.0f}')
    else:
        print(f'{hours}:{minutes:.0f}')
else:
    minutes = (minutes + bonus_time) % 60
    print(f'{hours}:{minutes:.0f}')