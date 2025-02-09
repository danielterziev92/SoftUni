number_of_floors = int(input())
number_of_rooms = int(input())
floor_letter = ''
for floor in range(number_of_floors, 0, -1):
    for room in range(number_of_rooms): # range(0, number_of_rooms)
        if floor == number_of_floors:
            floor_letter = "L"
        elif floor %2 != 0:
            floor_letter = "A"
        else:  #elif floor %2 == 0
            floor_letter = "O"
        print(f"{floor_letter}{floor}{room}", end = " ")
    print()