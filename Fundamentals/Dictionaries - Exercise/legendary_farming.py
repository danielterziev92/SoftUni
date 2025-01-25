materials = input().split(" ")
materials_dict = dict()
is_win_the_race = True
while is_win_the_race:
    for i in range(0, len(materials), 2):
        material = materials[i+1].lower()
        quantity = int(materials[i])
        if material not in materials_dict:
            materials_dict[material] = quantity
        else:
            materials_dict[material] += quantity
        if "shards" in materials_dict.keys():
            if materials_dict["shards"] >= 250:
                print("Shadowmourne obtained!")
                materials_dict["shards"] -= 250
                is_win_the_race = False
                break
        if "fragments" in materials_dict.keys():
            if materials_dict["fragments"] >= 250:
                print("Valanyr obtained!")
                materials_dict["fragments"] -= 250
                is_win_the_race = False
                break
        if 'motes' in materials_dict.keys():
            if materials_dict["motes"] >= 250:
                print("Dragonwrath obtained!")
                materials_dict["motes"] -= 250
                is_win_the_race = False
                break
    if not is_win_the_race:
        break
    materials = input().split(" ")
quantity_of_shards = 0
quantity_of_fragments = 0
quantity_of_motes = 0
if "shards" in materials_dict.keys():
    quantity_of_shards = materials_dict.pop("shards")
if "fragments" in materials_dict.keys():
    quantity_of_fragments = materials_dict.pop("fragments")
if "motes" in materials_dict.keys():
    quantity_of_motes = materials_dict.pop("motes")

print(f"shards: {quantity_of_shards}\nfragments: {quantity_of_fragments}\nmotes: {quantity_of_motes}")
for material, quantity in materials_dict.items():
    print(f"{material}: {quantity}")