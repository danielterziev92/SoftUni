first_letter = input()
second_letter = input()
old_letter = first_letter
for symbol in range(1, len(first_letter)+2):
    left_part = second_letter[:symbol]
    right_part = first_letter[symbol:]
    current_letter = left_part + right_part
    if old_letter != current_letter:
        print(current_letter)
    old_letter = current_letter