import sys
from io import StringIO

test1 = '''10
5
Mercedes
green
Mercedes
BMW
Skoda
green
END'''
test2 = '''9
3
Mercedes
Hummer
green
Hummer
Mercedes
green
END'''

sys.stdin = StringIO(test1)

from collections import deque

green_light_seconds = int(input())
free_windows_seconds = int(input())
cars_on_crossroads = deque()
car_passed = 0
while True:
    lines = input()
    if lines == 'END':
        break
    if lines == 'green':
        while cars_on_crossroads:
            car_name = cars_on_crossroads.popleft()
            car_fullname = ''.join(car_name)
            for _ in range(green_light_seconds):
                if not car_name:
                    if not cars_on_crossroads: break
                    else:
                        car_name = cars_on_crossroads.popleft()
                        car_fullname = ''.join(car_name)
                        car_passed += 1
                car_name.popleft()
            for i in range(free_windows_seconds):
                if not car_name:
                    if not cars_on_crossroads: break
                    else:
                        if len(cars_on_crossroads[0]) > free_windows_seconds - i: break
                        car_name = cars_on_crossroads.popleft()
                        car_fullname = ''.join(car_name)
                        car_passed += 1
                car_name.popleft()
            if len(car_name) > 0:
                print('A crash happened!')
                car_hit_char = car_name.popleft()
                print(f'{car_fullname} was hit at {car_hit_char}.')
                exit()
            car_passed += 1
            break
    else:
        cars_on_crossroads.append(deque(x for x in lines))
print('Everyone is safe.')
print(f'{car_passed} total cars passed the crossroads.')
