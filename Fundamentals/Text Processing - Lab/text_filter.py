banned_words = input().split(", ")
text = input()
for banned_word in banned_words:
    while banned_word in text:
        length = len(banned_word)
        text = text.replace(banned_word, length*"*")
print(text)