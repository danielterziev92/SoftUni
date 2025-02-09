width_free_space = int(input())
deep_free_space = int(input())
height_free_space = int(input())
free_space = width_free_space * deep_free_space * height_free_space
count_cartoons = input()
while count_cartoons != 'Done':
    count_cartoons = int(count_cartoons)
    free_space -= count_cartoons
    if free_space <= 0:
        break
    count_cartoons = input()
if free_space <= 0:
    print(f'No more free space! You need {abs(free_space)} Cubic meters more.')
else:
    print(f'{free_space} Cubic meters left.')