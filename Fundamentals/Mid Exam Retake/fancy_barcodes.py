import re
count = int(input())
for _ in range(count):
    secure_barcode = input()
    expression = r"[@][#]+([A-Z][A-Za-z0-9]{4,}[A-Z])[@][#]+"
    if re.findall(expression, secure_barcode):
        secure_barcode = re.findall(expression, secure_barcode)
        group = re.findall(r'\d', "".join(secure_barcode))
        if group:
            print(f"Product group: {''.join(group)}")
        else:
            print("Product group: 00")
    else:
        print("Invalid barcode")
