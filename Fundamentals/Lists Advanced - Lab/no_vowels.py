vowels = ['a', 'o', 'u', 'e', 'i']
the_input = input()
the_output = [ch for ch in the_input if ch not in vowels]
print(''.join(the_output))
