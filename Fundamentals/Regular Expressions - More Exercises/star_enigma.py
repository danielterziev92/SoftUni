import re

messages_count = int(input())
planets = {"attacked": dict(), "destroyed": dict()}
for _ in range(messages_count):
    message = input()
    decrypt_message = ""
    decrypt_number = re.findall(r"[S]|[s]|[A]|[a]|[R]|[r]|[T]|[t]", message)
    planet_name = None
    population = None
    attack_type = None
    soldiers_count = None
    for ch in message:
        decrypt_message += chr(ord(ch) - len(decrypt_number))
    if re.search(r"\@([A-Za-z]+|[a-z]+)", decrypt_message):
        planet_name = re.search(r"\@([A-Za-z]+|[a-z]+)", decrypt_message).group().replace("@", "")
    if re.search(r"\:(\d+)", decrypt_message):
        population = re.search(r"\:(\d+)", decrypt_message).group().replace(":", "")
    if re.search(r"\!([A|D|a|d])", decrypt_message) != None:
        attack_type = re.search(r"\!([A|D|a|d])\!", decrypt_message).group().replace("!", "").upper()
    if re.search(r"\-\>(\d+)", decrypt_message) != None:
        soldiers_count = re.search(r"\>|\-\>(\d+)", decrypt_message).group().replace("->", "")
    if planet_name != None and population != None and attack_type != None and soldiers_count != None:
        if attack_type == "A":
            planets["attacked"][planet_name] = planets.get(planet_name)
        elif attack_type == "D":
            planets["destroyed"][planet_name] = planets.get(planet_name)

for planet in planets:
    if planet == "attacked":
        planet_type = "Attacked planets:"
    else:
        planet_type = "Destroyed planets:"
    print(f"{planet_type} {len(planets[planet].values())}")
    for planet_name in sorted(planets[planet], key=lambda name: name):
        print(f"-> {planet_name}")