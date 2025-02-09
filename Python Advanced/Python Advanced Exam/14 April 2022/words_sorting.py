def words_sorting(*args):
    def ordering(value):
        if ascending:
            return value[0]
        else:
            return -value[1]

    words = {}
    ascending = False

    for arg in args:
        if arg not in words:
            words[arg] = 0
        words[arg] += sum([ord(x) for x in arg])

    result = ''

    total_sum_of_words = sum(words.values())
    if total_sum_of_words % 2 == 0:
        ascending = True

    for key, value in sorted(words.items(), key=ordering):
        result += f'{key} - {value}\n'

    return result


print(words_sorting('escape', 'charm', 'mythology'))

print(words_sorting('escape', 'charm', 'eye'))

print(words_sorting('cacophony', 'accolade'))