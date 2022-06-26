start_letter = input()
end_letter = input()
pass_letter = input()
count = 0
for all_letter in range(1, 2):
    for first_letter in range(ord(start_letter), ord(end_letter)+1):
        for second_letter in range(ord(start_letter), ord(end_letter)+1):
            for third_letter in range(ord(start_letter), ord(end_letter)+1):
                letter = chr(first_letter)+chr(second_letter)+chr(third_letter)
                if pass_letter in letter:
                    continue
                else:
                    print(letter, end=' ')
                    count += 1
print(count)