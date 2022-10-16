import sys
from io import StringIO

test1 = '''o e a o e a i
p r s x r'''

test2 = '''a a a
x r l t p p'''

test3 = '''u a o i u y o e
p m t l'''

sys.stdin = StringIO(test3)

from collections import deque

vowels = deque(input().split())
consonants = list(input().split())
words = {"rose": "rose", "tulip": "tulip", "lotus": "lotus", "daffodil": "daffodil"}
founded_word = ''
found = False

while founded_word == '' and vowels and consonants:
    vowel_char = vowels.popleft()
    consonant_char = consonants.pop()

    for word in words:
        words[word] = words[word].replace(vowel_char, '')
        words[word] = words[word].replace(consonant_char, '')
        if words[word] == '':
            founded_word = word
            found = True
            break

    if found:
        break


if founded_word:
    print(f'Word found: {founded_word}')
else:
    print('Cannot find any word!')

if vowels:
    print(f'Vowels left: {" ".join(vowels)}')

if consonants:
    print(f'Consonants left: {" ".join(consonants)}')
