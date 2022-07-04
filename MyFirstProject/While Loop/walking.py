steps = 10000
current_steps_type = ''
while steps > 0 and current_steps_type != 'Going home':
    current_steps_type = input()
    if current_steps_type == 'Going home':
        current_steps = int(input())
        steps -= current_steps
        if steps >= 0:
            print(f'{steps} more steps to reach goal.')
        break
    else:
        current_steps = int(current_steps_type)
        steps -= current_steps
if steps <= 0:
    print(f'Goal reached! Good job!')
    print(f'{abs(steps)} steps over the goal!')