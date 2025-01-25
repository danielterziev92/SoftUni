word = list(input())
occurrences = dict()
for ch in word:
    if ch not in occurrences and ch != " ":
        occurrences[ch] = 0
    if ch in occurrences.keys():
        occurrences[ch] += 1

for key, value in occurrences.items():
    print(f"{key} -> {value}")