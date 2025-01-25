def decipher(word: str):
    first_letter = chr(int(''.join(filter(str.isdigit, word))))
    word = list(word.replace(str(ord(first_letter)), first_letter))
    word[1], word[-1] = word[-1], word[1]
    return ''.join(word)


secret_message = input().split(' ')
[print(decipher(word=word), end=' ') for word in secret_message]