texts = input().split(" ")
output = ""
while texts:
    text = texts.pop(0)
    count = len(text)
    output += count * text
print(output)
