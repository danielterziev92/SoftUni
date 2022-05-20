letter = input()
all_index = []
for char in range(len(letter)):
    if letter[char].isupper() == True:
        all_index.append(char)
print(all_index)