words = input().lower()
words = words.split(" ")
dict_words = dict()
for word in words:
    if word not in dict_words.keys():
        dict_words[word] = 0
    dict_words[word] += 1
odd_words = list()
for word in dict_words:
    if dict_words[word] % 2 != 0:
        odd_words.append(word)
print(' '.join(odd_words))
