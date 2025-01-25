neighborhood = input().split("@")
neighborhood = list(map(int, neighborhood))
commands = input()
position = 0
while commands != "Love!":
    commands = commands.split(" ")
    index = int(commands[1])
    position += index
    if position >= len(neighborhood):
        position = 0
    if (neighborhood[position] - 2) == 0:
        print(f"Place {position} has Valentine's day.")
    if neighborhood[position] == 0:
        print(f"Place {position} already had Valentine's day.")
    if neighborhood[position] - 2 >= 0:
        neighborhood[position] -= 2

    commands = input()

print(f"Cupid's last position was {position}.")
if neighborhood.count(0) == len(neighborhood):
    print("Mission was successful.")
else:
    difference = len(neighborhood) - neighborhood.count(0)
    print(f"Cupid has failed {difference} places.")