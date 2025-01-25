data = input().split(" ")
stocks = dict()
for i in range(0, len(data), 2):
    product = data[i]
    quantity = data[i+1]
    stocks[product] = quantity

searching_product = input().split(" ")
for product in searching_product:
    if product in stocks.keys():
        print(f"We have {stocks[product]} of {product} left")
    else:
        print(f"Sorry, we don't have {product}")