removing_word = input()
the_word = input()
while removing_word in the_word:
    the_word = the_word.replace(removing_word, '')
print(the_word)
