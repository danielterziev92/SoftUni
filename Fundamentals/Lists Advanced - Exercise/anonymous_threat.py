def marge(command: list, words: list):
    start_index = int(command[1])
    end_index = int(command[2])
    if end_index > len(words):
        end_index = len(words) - 1
    if end_index < start_index:
        return words
    new_words = [words[i] for i in range(start_index, end_index)]
    new_words = ''.join(new_words)
    for i in range(start_index, end_index):
        words.remove(words[start_index])
    words.insert(start_index, new_words)
    return words


def divine(command: list, words: list):
    index = int(command[1])
    partitions = int(command[2])
    step = round(len(words[index])/partitions)
    current_word = words[index]
    if step % 2 == 0:
        words.remove(words[index])
        new_words = [current_word[word:step+word] for word in range(0, len(current_word), step)]
        for i in range(len(new_words)):
            words.insert(index+i, new_words[i])
        return words
    else:
        words.remove(words[index])
        new_words = [current_word[word:step + word] for word in range(0, len(current_word)-step-step, step)]
        new_words.append(current_word[-(step+step):])
        for i in range(len(new_words)):
            words.insert(index + i, new_words[i])
        return words



words = input().split(' ')
words = list(filter(lambda word: word != '', words))
command = input().split(' ')
while command[0] != "3:1":
    current_command = command[0]
    if current_command == 'merge':
        marge(command, words)
    elif current_command == 'divide':
        divine(command, words)
    command = input().split(' ')

print(' '.join(words))
