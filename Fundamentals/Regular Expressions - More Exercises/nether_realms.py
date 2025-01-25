import re

messages = input().split(", ")
messages = sorted(messages, key=lambda name: name)
for message in messages:
    health = re.findall(r"[A-Za-z]", message)
    health_value = sum([ord(ch) for ch in health])
    damage_matches = re.finditer(r"(?P<number>[\-]?\d+([.]\d+)*)|(?P<factor>[*|/]*)", message)
    damage_value = 0
    for match in damage_matches:
        if match.group("number") is not None:
            current_number = match.group("number")
            damage_value += float(current_number)
        if match.group("factor") is not None and match.group("factor") != "":
            current_factor = match.group("factor")
            if "*" in current_factor:
                for _ in range(len(current_factor)):
                    damage_value *= 2
            else:
                for _ in range(len(current_factor)):
                    damage_value /= 2
    print(f"{message} - {health_value} health, {damage_value:.2f} damage")