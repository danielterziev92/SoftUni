def poor_rich(possessions: list, wealth: int):
    for index in range(len(possessions)):
        if possessions[index] < wealth:
            min_wealth_index = possessions.index(min(possessions))
            max_wealth_index = possessions.index(max(possessions))
            if possessions[max_wealth_index] > possessions[min_wealth_index]:
                difference = wealth - possessions[min_wealth_index]
                possessions[min_wealth_index] += difference
                possessions[max_wealth_index] -= difference
    if min(possessions) == wealth:
        return True, possessions
    else:
        return False


population = list(map(int, input().split(', ')))
minimum_wealth = int(input())
if poor_rich(population, minimum_wealth):
    print(population)
else:
    print("No equal distribution possible")