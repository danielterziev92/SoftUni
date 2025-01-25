quantity_of_food = float(input()) * 1000
hay = float(input()) * 1000
cover = float(input()) * 1000
weight = float(input()) * 1000
is_enough = True
for day in range(1, 31):
    if quantity_of_food <= 0 or hay <= 0 or cover <= 0:
        is_enough = False
        break
    quantity_of_food -= 300
    if day % 2 == 0:
        needed_hay = quantity_of_food * 0.05
        hay -= needed_hay
    if day % 3 == 0:
        needed_cover = round(weight / 3, 2)
        cover -= needed_cover

if is_enough and quantity_of_food > 0 and hay > 0 and cover > 0:
    quantity_of_food = quantity_of_food / 1000
    hay = hay / 1000
    cover = cover / 1000
    print(f"Everything is fine! Puppy is happy! Food: {quantity_of_food:.2f}, Hay: {hay:.2f}, Cover: {cover:.2f}.")
else:
    print("Merry must go to the pet store!")