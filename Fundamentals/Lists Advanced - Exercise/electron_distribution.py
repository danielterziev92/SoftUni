number_of_electrons = int(input())
result = list()
index = 1
while number_of_electrons > 0:
    amount = 2*(index**2)
    if amount > number_of_electrons:
        result.append(number_of_electrons)
    else:
        result.append(amount)
    number_of_electrons -= amount
    index += 1

print(result)
