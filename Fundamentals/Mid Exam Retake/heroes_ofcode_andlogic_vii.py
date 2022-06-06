count_heroes = int(input())
heroes = list()
for _ in range(count_heroes):
    hero_details = input().split(" ")
    hero_name = hero_details[0]
    hero_hp = int(hero_details[1])
    hero_mana = int(hero_details[2])
    heroes.append([hero_name, hero_hp, hero_mana])
commands = input()
while commands != "End":
    commands = commands.split(" - ")
    current_command = commands[0]
    if current_command == "CastSpell":
        hero_name = commands[1]
        mana_needed = int(commands[2])
        spell_name = commands[3]
        for hero in heroes:
            if hero[0] == hero_name:
                hero_index = heroes.index(hero)
                current_mana = heroes[hero_index][2]
                if current_mana >= mana_needed:
                    heroes[hero_index][2] -= mana_needed
                    new_hero_mana = heroes[hero_index][2]
                    print(f"{hero_name} has successfully cast {spell_name} and now has {new_hero_mana} MP!")
                else:
                    print(f"{hero_name} does not have enough MP to cast {spell_name}!")
    elif current_command == "TakeDamage":
        hero_name = commands[1]
        damage = int(commands[2])
        attacker = commands[3]
        for hero in heroes:
            if hero[0] == hero_name:
                hero_index = heroes.index(hero)
                heroes[hero_index][1] -= damage
                new_hp = heroes[hero_index][1]
                if new_hp > 0:
                    print(f"{hero_name} was hit for {damage} HP by {attacker} and now has {new_hp} HP left!")
                else:
                    heroes.pop(hero_index)
                    print(f"{hero_name} has been killed by {attacker}!")
    elif current_command == "Recharge":
        hero_name = commands[1]
        amount = int(commands[2])
        for hero in heroes:
            if hero[0] == hero_name:
                hero_index = heroes.index(hero)
                amount_recovered = amount
                if (heroes[hero_index][2] + amount) > 200:
                    amount_recovered = 200 - heroes[hero_index][2]
                    heroes[hero_index][2] = 200
                else:
                    heroes[hero_index][2] += amount
                new_hero_mana = heroes[hero_index][2]
                print(f"{hero_name} recharged for {amount_recovered} MP!")
    elif current_command == "Heal":
        hero_name = commands[1]
        amount = int(commands[2])
        for hero in heroes:
            if hero[0] == hero_name:
                hero_index = heroes.index(hero)
                amount_recovered = amount
                if (heroes[hero_index][1] + amount) > 100:
                    amount_recovered = 100 - heroes[hero_index][1]
                    heroes[hero_index][1] = 100
                else:
                    heroes[hero_index][1] += amount
                new_hero_hp = heroes[hero_index][1]
                print(f"{hero_name} healed for {amount_recovered} HP!")

    commands = input()
for hero in heroes:
    hero_name = hero[0]
    hero_hp = hero[1]
    hero_mana = hero[2]
    print(f"{hero_name}")
    print(f"  HP: {hero_hp}")
    print(f"  MP: {hero_mana}")
