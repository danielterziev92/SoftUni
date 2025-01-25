count_command = int(input())
softuni_parking = dict()
for i in range(count_command):
    commands = input().split(" ")
    command, username = commands[0], commands[1]
    if command == "register":
        license_plate_number = commands[2]
        if username not in softuni_parking.keys():
            softuni_parking[username] = license_plate_number
            print(f"{username} registered {license_plate_number} successfully")
        else:
            print(f"ERROR: already registered with plate number {license_plate_number}")
    elif command == "unregister":
        if username not in softuni_parking.keys():
            print(F"ERROR: user {username} not found")
        else:
            print(f"{username} unregistered successfully")
            softuni_parking.pop(username)

for username, license_plate_number in softuni_parking.items():
    print(f"{username} => {license_plate_number}")