lost_fights_count = int(input())
helmet_price = float(input())
sword_price = float(input())
shield_price = float(input())
armor_price = float(input())
time_broken = {
    'helmet': 0,
    'sword': 0,
    'shield': 0,
    'armor': 0
}
for fight in range(1, lost_fights_count+1):
    if fight % 2 == 0:
        time_broken['helmet'] += 1
    if fight % 3 == 0:
        time_broken['sword'] += 1
    if fight % 2 == 0 and fight % 3 == 0:
        time_broken['shield'] += 1
        if time_broken['shield'] % 2 == 0:
            time_broken['armor'] += 1
total_amount = time_broken['helmet'] * helmet_price + time_broken['sword'] * sword_price + time_broken['shield'] * shield_price + time_broken['armor'] * armor_price
print(f'Gladiator expenses: {total_amount:.2f} aureus')