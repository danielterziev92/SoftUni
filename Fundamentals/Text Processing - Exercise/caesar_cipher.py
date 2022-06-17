text = input()
output = ""
for ch in text:
    output += chr(ord(ch)+3)
print(output)


# text = input()
# print("".join([chr(ord(ch)+3) for ch in text]))
