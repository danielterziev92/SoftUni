import re
numbers = input()
expression = r"(^|(?<=\s))-?([0]|[1-9][0-9]*)(\.[0-9]+)?($|(?=\s))"
matches = re.finditer(expression, numbers)
match_numbers = list()
for match in matches:
    match_numbers.append(match.group())
print(" ".join(match_numbers))