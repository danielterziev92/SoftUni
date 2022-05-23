energy = 100
coins = 100
all_events = input().split('|')
are_managed_handle_events = False
for i in range(len(all_events)):
    current_event = all_events[i].split('-')
    type_event = current_event[0]
    event_number = int(current_event[1])
    if type_event == 'rest':
        gained_energy = event_number
        if energy + gained_energy > 100:
            gained_energy = 0
        else:
            energy += gained_energy
        print(f'You gained {gained_energy} energy.')
        print(f'Current energy: {energy}.')
    elif type_event == 'order':
        gained_coins = event_number
        if (energy - 30) >= 0:
            energy -= 30
            coins += gained_coins
            print(f'You earned {gained_coins} coins.')
        else:
            energy += 50
            print('You had to rest!')
    else:
        cost_coins = event_number
        if (coins - cost_coins) >= 0:
            coins -= cost_coins
            print(f'You bought {type_event}.')
        else:
            print(f'Closed! Cannot afford {type_event}.')
            are_managed_handle_events = True
            break
if not are_managed_handle_events:
    print('Day completed!')
    print(f'Coins: {coins}')
    print(f'Energy: {energy}')