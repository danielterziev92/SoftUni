from collections import deque

water_quantity = int(input())
people = deque()
while True:
    command = input()
    if command == "Start":
        break
    people.append(command)

while people:
    wanted_water = input()
    if wanted_water.startswith("refill "):
        wanted_water = wanted_water.split(" ")
        current_quantity = int(wanted_water[-1])
        water_quantity += current_quantity
    else:
        person = people.popleft()
        if int(wanted_water) > water_quantity:
            print(f"{person} must wait")
        else:
            print(f"{person} got water")
            water_quantity -= int(wanted_water)
print(f"{water_quantity} liters left")
