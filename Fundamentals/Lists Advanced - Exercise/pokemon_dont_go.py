pokemons = list(map(int, input().split(" ")))
captured_pokemon = 0
while len(pokemons) > 0:
    index = int(input())
    current_value = 0
    if index < 0:
        current_value = pokemons[0]
        pokemons.pop(0)
        pokemons.insert(0, pokemons[-1])
    elif index >= len(pokemons):
        current_value = pokemons[-1]
        pokemons.pop(-1)
        pokemons.append(pokemons[0])
    else:
        current_value = pokemons[index]
        pokemons.pop(index)

    for i in range(len(pokemons)):
        if pokemons[i] <= current_value:
            pokemons[i] += current_value
        else:
            pokemons[i] -= current_value

    captured_pokemon += current_value

print(captured_pokemon)