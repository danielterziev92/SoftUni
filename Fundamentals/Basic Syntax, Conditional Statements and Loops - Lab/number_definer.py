number = float(input())
output = 'zero'
if number > 0:
    if number < 1:
        output = 'small positive'
    elif number > 1_000_000:
        output = 'large positive'
    else:
        output = 'positive'
elif number < 0:
    if number > -1:
        output = 'small negative'
    elif number < -1_000_000:
        output = 'large negative'
    else:
        output = 'negative'
print(output)
