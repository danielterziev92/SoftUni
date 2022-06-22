capacity = int(input())
all_fans = int(input())
count_fans = all_fans
sector_a = 0
sector_b = 0
sector_c = 0
sector_d = 0
for count_fans in range(count_fans):
    sector = input()
    if sector == 'A':
        sector_a += 1
    elif sector == 'B':
        sector_b += 1
    elif sector == 'V':
        sector_c += 1
    elif sector == 'G':
        sector_d += 1
average_fans = ( all_fans / capacity) * 100
persent_a = (sector_a / all_fans) * 100
persent_b = (sector_b / all_fans) * 100
persent_c = (sector_c / all_fans) * 100
persent_d = (sector_d / all_fans) * 100
print(f'{persent_a:.2f}%')
print(f'{persent_b:.2f}%')
print(f'{persent_c:.2f}%')
print(f'{persent_d:.2f}%')
print(f'{average_fans:.2f}%')