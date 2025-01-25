import re
text = input()
expression = r"(?<=\s)\_{1}(?P<name>[a-zA-Z0-9]+)\b"
matches = re.finditer(expression, text)
names = list()
for match in matches:
    name = match.group("name")
    names.append(name)
print(",".join(names))