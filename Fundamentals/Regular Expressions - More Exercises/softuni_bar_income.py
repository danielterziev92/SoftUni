import re

data = input()
total_amount = 0
while data != "end of shift":
    customer_name_expression = re.compile(r"(?<=\%)(?P<name>[A-Z][a-z]+)(?=\%)")
    product_name_expression = re.compile(r"(?<=\<)(?P<product>\w+)(?=\>)")
    quantity_expression = re.compile(r"(?<=\|)(?P<quantity>[0-9]+)(?=\|)")
    price_expression = re.compile(r"(?P<price>([0-9]+)(\.[0-9]*)?)(?=\${1})")
    customer_name = ""
    product_name = ""
    quantity = 0
    price = 0
    if bool(re.search(customer_name_expression, data)):
        customer_name = re.search(customer_name_expression, data).group()
    if bool(re.search(product_name_expression, data)):
        product_name = re.search(product_name_expression, data).group()
    if bool(re.search(quantity_expression, data)):
        quantity = re.search(quantity_expression, data).group()
    if bool(re.search(price_expression, data)):
        price = re.search(price_expression, data).group()
    if customer_name != "" and product_name != "" and int(quantity) > 0 and float(price) > 0:
        total_price = int(quantity)*float(price)
        print(f"{customer_name}: {product_name} - {total_price:.2f}")
        total_amount += total_price

    data = input()
print(f"Total income: {total_amount:.2f}")