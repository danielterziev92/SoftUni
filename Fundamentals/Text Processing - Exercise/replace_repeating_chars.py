text = input()
output = ""
for i in range(len(text)):
    if i == len(text)-1:
        if text[i-2] != text[-1]:
            output += text[i]
        else:
            output += text[i]
    else:
        if text[i] != text[i+1]:
            output += text[i]
print(output)