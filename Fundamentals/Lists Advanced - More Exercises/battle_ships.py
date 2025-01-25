rows_of_the_field = int(input())
battle_ships = list()
for row in range(rows_of_the_field):
    battle_ships.append(list(map(int, input().split(' '))))
attacks = input().split(' ')
destroyed_ship = 0
for attack in range(len(attacks)):
    attacked_row = int(attacks[attack][0])
    attacked_col = int(attacks[attack][2])
    if battle_ships[attacked_row][attacked_col] > 0:
        battle_ships[attacked_row][attacked_col] -= 1
        if battle_ships[attacked_row][attacked_col] == 0:
            destroyed_ship += 1
print(destroyed_ship)