def reverce_value(values: list):
    values = [abs(float(values[value])) for value in range(len(values))]
    return values


all_values = input().split(' ')
print(reverce_value(values=all_values))