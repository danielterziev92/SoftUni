all_words = input().split(' ')
the_word = input()
all_palindrome = [palindrome for palindrome in all_words if palindrome[::-1] == palindrome]
counts = all_palindrome.count(the_word)
print(all_palindrome)
print(f'Found palindrome {counts} times')
