import re

text = input()
emoji_occurrences_indices = [_.start() for _ in re.finditer(r":", text)]
for emoji in emoji_occurrences_indices:
    print(f"{text[emoji]}{text[emoji + 1]}")
