inputs = input()
visited_cities = list()
while inputs != "Sail":
    inputs = inputs.split("||")
    city = inputs[0]
    population = int(inputs[1])
    gold = int(inputs[2])
    is_town_visited = False
    for cities in visited_cities:
        if cities[0] == city:
            cities[1] += population
            cities[2] += gold
            is_town_visited = True
    if not is_town_visited:
        visited_cities.append([city, population, gold])
    inputs = input()
commands = input()
while commands != "End":
    commands = commands.split("=>")
    current_command = commands[0]
    if current_command == "Plunder":
        town = commands[1]
        people = int(commands[2])
        gold = int(commands[3])
        for city in visited_cities:
            if city[0] == town:
                city[1] -= people
                city[2] -= gold
                print(f"{town} plundered! {gold} gold stolen, {people} citizens killed.")
                if city[1] <= 0 or city[2] <= 0:
                    print(f"{city[0]} has been wiped off the map!")
                    visited_cities.pop(visited_cities.index(city))
                break
    elif current_command == "Prosper":
        town = commands[1]
        gold = int(commands[2])
        if gold >= 0:
            for city in visited_cities:
                if city[0] == town:
                    city[2] += gold
                    print(f"{gold} gold added to the city treasury. {town} now has {city[2]} gold.")
                    break
        else:
            print("Gold added cannot be a negative number!")

    commands = input()
if visited_cities:
    count = len(visited_cities)
    print(f"Ahoy, Captain! There are {count} wealthy settlements to go to:")
    for city in visited_cities:
        print(f"{city[0]} -> Population: {city[1]} citizens, Gold: {city[2]} kg")
else:
    print("Ahoy, Captain! All targets have been plundered and destroyed!")
