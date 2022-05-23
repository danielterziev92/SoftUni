red_card = input().split(' ')
team_a = []
team_b = []
for i in range(1,12):
    team_a.append(i)
    team_b.append(i)
for i in range(len(red_card)):
    if len(team_a) < 7 or len(team_b) < 7:
        break
    current_number = int(red_card[i][2:])
    if red_card[i][0] == 'A':
        if current_number in team_a:
            team_a.remove(current_number)
    elif red_card[i][0] == 'B':
        if current_number in team_b:
            team_b.remove(current_number)
print(f'Team A - {len(team_a)}; Team B - {len(team_b)}')
if len(team_a) < 7 or len(team_b) < 7:
     print('Game was terminated')