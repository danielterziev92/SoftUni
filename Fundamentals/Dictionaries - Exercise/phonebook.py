data = input()
phonebook = dict()
while "-" in data:
    name, phone_number = data.split("-")
    phonebook[name] = phone_number
    data = input()
data = int(data)
for i in range(data):
    searching_name = input()
    if searching_name in phonebook.keys():
        print(f"{searching_name} -> {phonebook[searching_name]}")
    else:
        print(f"Contact {searching_name} does not exist.")