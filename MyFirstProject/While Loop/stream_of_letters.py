letter = input()
the_words = ''
incorect_letter = 'nco'
while letter != 'End':
    if letter.isalpha():
        if letter in incorect_letter:
            incorect_letter = incorect_letter.replace(letter, '')
        else:
            the_words += letter
    if incorect_letter == '':
        print(f'{the_words}', end=' ')
        incorect_letter = 'nco'
        the_words = ''
    letter = input()