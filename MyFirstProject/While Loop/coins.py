money = float(input())
coins = int(100*money)
couting_cent = 0
while coins > 0:
    if coins >= 200:
        couting_cent += 1
        coins -= 200
    elif 99 < coins <= 199:
        couting_cent += 1
        coins -= 100
    elif 50 <= coins <= 99:
        couting_cent += 1
        coins -= 50
    elif 20 <= coins < 50:
        couting_cent += 1
        coins -= 20
    elif 10 <= coins < 20:
        couting_cent += 1
        coins -= 10
    elif 5 <= coins < 10:
        couting_cent += 1
        coins -= 5
    elif 2 <= coins < 5:
        couting_cent += 1
        coins -= 2
    elif money < 2:
        couting_cent += 1
        coins -= 1
    else:
        break
print(f'{couting_cent}')