data = input().split(" ")
foods = dict()
for i in range(0, len(data), 2):
    food = data[i]
    quantity = data[i+1]
    foods[food] = int(quantity)
print(foods)
