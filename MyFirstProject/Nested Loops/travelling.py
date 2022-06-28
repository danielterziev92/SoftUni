destination = input()
current_budget = 0.0
visited_destination = 0
while destination != 'End':
    minimum_budget = float(input())
    while current_budget < minimum_budget:
        spent_money = float(input())
        current_budget += spent_money
    print(f'Going to {destination}!')
    destination = input()
    current_budget = 0