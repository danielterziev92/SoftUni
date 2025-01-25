travel_route = input().split("||")
fuel = int(input())
ammunition = int(input())
for route in travel_route:
    command = route.split()
    current_command = command[0]
    if current_command == "Travel":
        light_years = int(command[1])
        if fuel >= light_years:
            fuel -= light_years
            print(f"The spaceship travelled {light_years} light-years.")
        else:
            print("Mission failed.")
            exit()
    elif current_command == "Enemy":
        enemy_armour = int(command[1])
        if ammunition >= enemy_armour:
            ammunition -= enemy_armour
            print(f"An enemy with {enemy_armour} armour is defeated.")
        elif ammunition < enemy_armour and fuel > (2 * enemy_armour):
            fuel -= 2 * enemy_armour
            print(f"An enemy with {enemy_armour} armour is outmaneuvered.")
        else:
            print("Mission failed.")
            exit()
    elif current_command == "Repair":
        ammunition_added = int(command[1]) * 2
        fuel_added = int(command[1])
        fuel += fuel_added
        ammunition += ammunition_added
        print(f"Ammunitions added: {ammunition_added}.")
        print(f"Fuel added: {fuel_added}.")
    elif current_command == "Titan":
        print("You have reached Titan, all passengers are safe.")
        exit()