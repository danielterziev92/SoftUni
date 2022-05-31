elements = list(input().split(' '))
command = input()
moves = 0
is_win = False
while command != "end":
    command = list(map(int, command.split(' ')))
    first_index = command[0]
    second_index = command[1]
    moves += 1
    if first_index == second_index or first_index >= len(elements) or second_index >= len(elements) \
            or first_index < 0 or second_index < 0:
        middle_index = round(len(elements) / 2)
        elements.insert(middle_index, f"-{moves}a")
        elements.insert(middle_index + 1, f"-{moves}a")
        print("Invalid input! Adding additional elements to the board")
    else:
        if elements[first_index] == elements[second_index]:
            current_element = elements[first_index]
            if second_index > first_index:
                elements.pop(second_index)
                elements.pop(first_index)
            else:
                elements.pop(first_index)
                elements.pop(second_index)
            print(f"Congrats! You have found matching elements - {current_element}!")
        else:
            print("Try again!")
    if len(elements) == 0:
        is_win = True
        break
    command = input()

if is_win:
    print(f"You have won in {moves} turns!")
else:
    print(f"Sorry you lose :(")
    print(f"{' '.join([str(element) for element in elements])}")