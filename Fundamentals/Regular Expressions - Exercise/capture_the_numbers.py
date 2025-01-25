import re
expression = r"\d+"
numbs = list()
while True:
    text = input()

    if not text:
        break

    numbs.extend(re.findall(expression, text))
print(" ".join(numbs))