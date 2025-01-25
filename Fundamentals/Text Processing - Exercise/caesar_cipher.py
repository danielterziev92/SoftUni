text = input()
output = ""
for ch in text:
    output += chr(ord(ch) + 3)
print(output)
