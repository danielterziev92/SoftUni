count_all_man = int(input())
count_all_woman = int(input())
count_table = int(input())
while count_table > 0:
    for x in range(1, count_all_man+1):
        man = x
        for y in range(1, count_all_woman+1):
            if count_table > 0:
                woman = y
                print(f'({man} <-> {y})', end=' ')
                count_table -= 1
    exit()