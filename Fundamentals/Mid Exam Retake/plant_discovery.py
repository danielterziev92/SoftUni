number_of_plants = int(input())
list_of_plants = list()
for _ in range(number_of_plants):
    list_of_plants.append(list(input().split('<->')))
commands = input()
while commands != 'Exhibition':
    commands = commands.split(' ')
    command = commands[0]
    if command == "Rate:":
        plant = commands[1]
        rating = commands[3]
        if any(find_plant[0] == plant for find_plant in list_of_plants):
            for plants in list_of_plants:
                if plants[0] == plant:
                    plant_index = list_of_plants.index(plants)
                    list_of_plants[plant_index].append(rating)
                    break
        else:
            print("error")
    elif command == "Update:":
        plant = commands[1]
        new_rarity = commands[3]
        if any(find_plant[0] == plant for find_plant in list_of_plants):
            for plants in list_of_plants:
                if plants[0] == plant:
                    plants[1] = new_rarity
                    break
        else:
            print("error")
    elif command == "Reset:":
        plant = commands[1]
        if any(find_plant[0] == plant for find_plant in list_of_plants):
            for plants in list_of_plants:
                if plants[0] == plant:
                    plant_index = list_of_plants.index(plants)
                    list_of_plants[plant_index][2:] = ''
                    break
        else:
            print("error")
    commands = input()

print(f"Plants for the exhibition:")
for plants in list_of_plants:
    total_rating = sum(list(map(int, plants[2:])))
    if total_rating > 0:
        len_of_total_rating = len(plants[2:])
        average_rating = total_rating / len_of_total_rating
    else:
        average_rating = 0
    print(f"- {plants[0]}; Rarity: {plants[1]}; Rating: {average_rating:.2f}")