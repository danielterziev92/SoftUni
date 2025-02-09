from math import floor
count_tournaments = int(input())
start_point = int(input())
point = start_point
winner = 0
for count_tournaments in range(count_tournaments):
    text = input()
    if text == 'W':
        point += 2000
        winner += 1
    elif text == 'F':
        point += 1200
    elif text == 'SF':
        point += 720
print(f'Final points: {point}')
print(f'Average points: {floor((point-start_point)/(count_tournaments+1)):.0f}')
print(f'{(winner/(count_tournaments+1))*100:.2f}%')