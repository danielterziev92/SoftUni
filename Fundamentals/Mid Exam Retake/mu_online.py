health = 100
bitcoins = 0
rooms = input().split("|")
for index, room in enumerate(rooms):
    room = room.split(" ")
    command = room[0]
    current_number = int(room[1])
    if command == "potion":
        amount = current_number
        if health + current_number >= 100:
            amount = 100 - health
        health += amount
        print(f"You healed for {amount} hp.")
        print(f"Current health: {health} hp.")
    elif command == "chest":
        bitcoins += current_number
        print(f"You found {current_number} bitcoins.")
    else:
        health -= current_number
        monster = command
        if health > 0:
            print(f"You slayed {monster}.")
        else:
            print(f"You died! Killed by {monster}.")
            print(f"Best room: {index+1}")
            exit()
print("You've made it!")
print(f"Bitcoins: {bitcoins}")
print(f"Health: {health}")
