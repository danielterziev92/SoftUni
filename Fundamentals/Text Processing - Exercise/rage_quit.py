text = input()
output = ""
current_number = "0"
symbols = ""
unique_symbols = set()
for i in range(len(text)):
    if ord(text[i]) in range(58, 127) or ord(text[i]) in range(33, 48):
        unique_symbols.add(text[i].upper())
    if text[i].isdigit():
        current_number += text[i]
    else:
        if int(current_number) > 0:
            output += symbols.upper() * int(current_number)
            current_number = "0"
            symbols = ""
        symbols += text[i]
if int(current_number) > 0:
    output += symbols.upper() * int(current_number)
print(f"Unique symbols used: {len(unique_symbols)}\n{output}")