key_value = int(input())
circle_value = int(input())
the_letter = []
string_value = ''
for v in range(circle_value):
    letter = input()
    the_letter.append(chr(ord(letter)+key_value))
print(f'{string_value.join(the_letter)}')