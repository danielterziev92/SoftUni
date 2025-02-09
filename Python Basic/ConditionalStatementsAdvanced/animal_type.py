type_animal = input()
mammal = ['dog']
reptile = ['crocodile', 'tortoise', 'snake']
unknown = 'unknown'
if type_animal in mammal:
    print('mammal')
elif type_animal in reptile:
    print('reptile')
else:
    print('unknown')