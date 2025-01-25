count = int(input())
synonyms_words = dict()
for i in range(count):
    word = input()
    synonyms = input()
    if word not in synonyms_words.keys():
        synonyms_words[word] = list()
    synonyms_words[word].append(synonyms)

for word in synonyms_words:
    print(f"{word} - {', '.join(synonyms_words[word])}")