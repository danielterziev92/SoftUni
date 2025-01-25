animals = input()
all_animals = animals.split(', ')
all_animals.reverse()
count = 0
for animal in all_animals:
    if animal != 'wolf':
        count += 1
    if animal == 'wolf':
        break
if count == 0:
    print(f'Please go away and stop eating my sheep')
else:
    print(f'Oi! Sheep number {count}! You are about to be eaten by a wolf!')