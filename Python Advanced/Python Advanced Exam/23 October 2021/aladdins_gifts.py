from collections import deque

materials = list(map(int, input().split()))
magics = deque(map(int, input().split()))

presents_created = 0

while materials and magics:
    material = materials.pop()
    magic = magics.popleft()

    the_sum = magic + material

    if 100 <= the_sum <= 199:
        pass
    elif 200 <= the_sum <= 299:
        pass
    elif 300 <= the_sum <= 399:
        pass
    elif 400 <= the_sum <= 499:
        pass
    

