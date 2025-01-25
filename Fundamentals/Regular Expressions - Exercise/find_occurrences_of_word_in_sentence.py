import re

text = input()
word = input()
matches_word = re.finditer(fr"\b{word}\b", text, re.IGNORECASE)
occurred_words = list()
for match_word in matches_word:
    occurred_words.append(match_word.group())
print(len(occurred_words))