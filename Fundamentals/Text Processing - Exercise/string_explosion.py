text = input().split(">")
left_strength = 0
for word in text:
    for ch in range(len(word)):
        if word[ch].isdigit():
            current_word = ''
            strength = int(word[ch])
            if left_strength > 0:
                strength += left_strength
            if strength > len(word):
                left_strength += strength - len(word)
                strength = len(word)
            for i in range(strength):
                current_word = word[strength:]
            text[text.index(word)] = "".join(current_word)
output = ">".join(text)
print(output)