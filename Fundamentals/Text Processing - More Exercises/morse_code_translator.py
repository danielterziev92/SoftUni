text = input().split(" | ")
final_output = ""
for ch in text:
    morse_text = ch.split()
    output = ""
    for morse_ch in morse_text:
        if morse_ch == ".-":
            output += "A"
        elif morse_ch == "-...":
            output += "B"
        elif morse_ch == "-.-.":
            output += "C"
        elif morse_ch == "-..":
            output += "D"
        elif morse_ch == ".":
            output += "E"
        elif morse_ch == "..-.":
            output += "F"
        elif morse_ch == "--.":
            output += "G"
        elif morse_ch == "....":
            output += "H"
        elif morse_ch == "..":
            output += "I"
        elif morse_ch == ".---":
            output += "J"
        elif morse_ch == "-.-":
            output += "K"
        elif morse_ch == ".-..":
            output += "L"
        elif morse_ch == "--":
            output += "M"
        elif morse_ch == "-.":
            output += "N"
        elif morse_ch == "---":
            output += "O"
        elif morse_ch == ".--.":
            output += "P"
        elif morse_ch == "--.-":
            output += "Q"
        elif morse_ch == ".-.":
            output += "R"
        elif morse_ch == "...":
            output += "S"
        elif morse_ch == "-":
            output += "T"
        elif morse_ch == "..-":
            output += "U"
        elif morse_ch == "...-":
            output += "V"
        elif morse_ch == ".--":
            output += "W"
        elif morse_ch == "-..-":
            output += "X"
        elif morse_ch == "-.--":
            output += "Y"
        elif morse_ch == "--..":
            output += "Z"
    final_output += output + " "
print(final_output)