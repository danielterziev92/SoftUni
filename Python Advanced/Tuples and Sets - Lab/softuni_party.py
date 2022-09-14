guest_numb = int(input())
party_vip = set()
party_regular = set()

for _ in range(guest_numb):
    guest = input()
    if guest[0].isdigit():
        party_vip.add(guest)
    else:
        party_regular.add(guest)

name = input()
while name != 'END':
    if name in party_vip:
        party_vip.remove(name)
    elif name in party_regular:
        party_regular.remove(name)
    name = input()

print(len(party_vip) + len(party_regular))
party_vip = sorted(party_vip)
party_regular = sorted(party_regular)
[print(name) for name in party_vip]
[print(name) for name in party_regular]
