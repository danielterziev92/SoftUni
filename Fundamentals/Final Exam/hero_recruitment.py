commands = input()
heroes = dict()
while commands != 'End':
    commands = commands.split()
    current_command = commands[0]
    hero_name = commands[1]
    if current_command == 'Enroll':
        if hero_name not in heroes.keys():
            heroes[hero_name] = list()
        else:
            print(f'{hero_name} is already enrolled.')
    else:
        spell_name = commands[2]
        if current_command == 'Learn':
            if hero_name not in heroes.keys():
                print(f"{hero_name} doesn't exist.")
            else:
                if spell_name not in heroes[hero_name]:
                    heroes[hero_name].append(spell_name)
                else:
                    print(f"{hero_name} has already learnt {spell_name}")
        elif current_command == 'Unlearn':
            if hero_name not in heroes.keys():
                print(f"{hero_name} doesn't exist.")
            else:
                if spell_name not in heroes[hero_name]:
                    print(f"{hero_name} doesn't know {spell_name}")
                else:
                    heroes[hero_name].remove(spell_name)

    commands = input()
print('Heroes:')
for hero, spells in heroes.items():
    all_spells = list()
    for spell in spells:
        all_spells.append(spell)
    final_spells = ', '.join(all_spells)
    if all_spells:
        print(f"== {hero}: {final_spells}")
    else:
        print(f"== {hero}:")

