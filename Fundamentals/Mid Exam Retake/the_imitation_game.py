word = input()
line = input()
while line != 'Decode':
    line = line.split('|')
    command = line[0]
    word = list(map(str, word))
    if command == 'Move':
        number_of_letters = int(line[1])
        while number_of_letters != 0:
            word.append(word.pop(0))
            number_of_letters -= 1
    elif command == 'Insert':
        index = int(line[1])
        value = line[2]
        word.insert(index, value)
    elif command == 'ChangeAll':
        substring = line[1]
        replacement = line[2]
        for index in range(len(word)):
            if word[index] == substring:
                word[index] = replacement
    word = "".join(word)
    line = input()

print(f"The decrypted message is: {word}")
