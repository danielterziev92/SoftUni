list = list(map(int, input().split(', ')))
i = 1
while len(list) > 0:
    numb_in_range = [numb for numb in list if ((i-1)*10) <= numb <= (i*10)]
    print(f"Group of {i*10}'s: {numb_in_range}")
    i += 1
    for numb in numb_in_range:
        list.remove(numb)
