def characters_between_two_characters(character_one, character_two):
    for i in range(ord(character_one)+1, ord(character_two)):
        print(chr(i), end=' ')


first_char = input()
second_char = input()
characters_between_two_characters(character_one=first_char, character_two=second_char)