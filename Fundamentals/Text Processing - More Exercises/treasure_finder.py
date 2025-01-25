key = input().split()
commands = input()
while commands != "find":
    output = ""
    index = 0
    for ch in commands:
        if index == len(key):
            index = 0
        output += chr(ord(ch)-int(key[index]))
        index += 1
    start_ampersand_symbol = output.find("&")
    start_left_bracket_symbol = output.find("<")
    start_right_bracket_symbol = output.find(">")
    item = ""
    coordinate = ""
    for i in range(start_ampersand_symbol+1, start_left_bracket_symbol):
        if output[i] == "&":
            break
        else:
            item += output[i]
    for i in range(start_left_bracket_symbol+1, start_right_bracket_symbol):
        coordinate += output[i]
    print(f"Found {item} at {coordinate}")

    commands = input()