product_information = input()
store = dict()
while product_information != "buy":
    product_information = product_information.split(' ')
    name = product_information[0]
    price = float(product_information[1])
    quantity = int(product_information[2])
    if name not in store.keys():
        store[name] = [price, quantity]
    else:
        if store[name][0] != price:
            store[name][0] = price
        store[name][1] += quantity
    product_information = input()
for product, information in store.items():
    price = information[0]
    quantity = information[1]
    print(f"{product} -> {price*quantity:.2f}")