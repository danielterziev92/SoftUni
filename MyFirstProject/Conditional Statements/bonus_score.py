point = int(input())
if point % 2 == 0:
    add_bonus_point = 1
elif point % 5 == 0:
    add_bonus_point = 2
else:
    add_bonus_point = 0

if point <= 100:
    bonus_point = 5 + add_bonus_point
    total_point = bonus_point + point
    print(bonus_point)
    print(total_point)
elif point > 100 and point <= 1000:
    bonus_point = (point * 0.2) + add_bonus_point
    total_point = bonus_point + point
    print(bonus_point)
    print(total_point)
elif point > 1000:
    bonus_point = (point * 0.1) + add_bonus_point
    total_point = bonus_point + point
    print(bonus_point)
    print(total_point)
