count_dragon = int(input())
dragon_info = dict()
for _ in range(count_dragon):
    data = input().split(" ")
    color, name, damage, health, armor = data[0], data[1], data[2], data[3], data[4]
    damage = 45 if damage == "null" else int(damage)
    health = 250 if health == "null" else int(health)
    armor = 10 if armor == "null" else int(armor)
    if color not in dragon_info.keys():
        dragon_info[color] = dict()
    if name in dragon_info[color]:
        dragon_info[color][name]["damage"] = damage
        dragon_info[color][name]["health"] = health
        dragon_info[color][name]["armor"] = armor
    else:
        dragon_info[color][name] = {"damage": damage, "health": health, "armor": armor}


for color in dragon_info.keys():
    total_damage = 0
    total_health = 0
    total_armor = 0
    count_dragons = len(dragon_info[color])
    for name, status in dragon_info[color].items():
        total_damage += status["damage"]
        total_health += status["health"]
        total_armor += status["armor"]
    print(f"{color}::({total_damage/count_dragons:.2f}/{total_health/count_dragons:.2f}/{total_armor/count_dragons:.2f})")
    for name, status in sorted(dragon_info[color].items(), key=lambda name: name[0]):
        print(f"-{name} -> damage: {status['damage']}, health: {status['health']}, armor: {status['armor']}")