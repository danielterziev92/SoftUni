kilometers = int(input())
day_or_night = input()
tax = 0.70
taxi_day = 0.79
taxi_night = 0.9
bus = 0.09
train = 0.06
if day_or_night == 'day':
    taxi = 0.79
elif day_or_night == 'night':
    taxi = 0.9
if kilometers < 20:
    print(f'{(kilometers * taxi) + tax:.2f}')
elif kilometers >= 20 and kilometers < 100:
    print(f'{kilometers * bus:.2f}')
elif kilometers >= 100:
    print(f'{kilometers * train:.2f}')