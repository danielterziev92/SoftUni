# def palindrome(*args):
#     word, index = args
#     if word == word[::-1]:
#         return f'{word} is a palindrome'
#     else:
#         return f'{word} is not a palindrome'
def palindrome(word: str, index: int):
    if index == len(word) // 2:
        return f'{word} is a palindrome'

    first_ch, last_ch = word[index], word[-index - 1]
    if first_ch != last_ch:
        return f'{word} is not a palindrome'
    return palindrome(word, index + 1)


print(palindrome("abcba", 0))
print(palindrome("peter", 0))
