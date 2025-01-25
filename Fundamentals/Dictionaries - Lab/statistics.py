data = input()
products = dict()
while data != "statistics":
    data = data.split(": ")
    product = data[0]
    quantity = int(data[1])
    if product in products.keys():
        products[product] += quantity
    else:
        products[product] = quantity

    data = input()

print(f"Products in stock:")
for product, quantity in products.items():
    print(f"- {product}: {quantity}")
print(f"Total Products: {len(products.keys())}")
print(f"Total Quantity: {sum(products.values())}")