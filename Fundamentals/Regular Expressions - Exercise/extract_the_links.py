import re

data = input()
expression = r"(?P<url>w{3}\.[a-zA-Z0-9]+(\-[a-zA-Z0-9]+)*\.[a-z]+([\.][a-z]+)*)"
while True:
    if data == "":
        break
    matches_url = re.finditer(expression, data)
    for match in matches_url:
        print(match.group("url"))

    data = input()