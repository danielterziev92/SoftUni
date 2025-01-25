import re
the_letter = input()
the_letter = the_letter.lower()
all_sand = re.findall('sand', the_letter)
all_water = re.findall('water', the_letter)
all_fish = re.findall('fish', the_letter)
all_sun = re.findall('sun', the_letter)
print(all_sand.count('sand')+all_water.count('water')+all_fish.count('fish')+all_sun.count('sun'))