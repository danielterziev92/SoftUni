text = input()

value = 0
for char in text:
    if char == 'a':
        value += 1
    elif char == 'e':
        value += 2
    elif char == 'i':
        value += 3
    elif char == 'o':
        value += 4
    elif char == 'u':
        value += 5

print(value)