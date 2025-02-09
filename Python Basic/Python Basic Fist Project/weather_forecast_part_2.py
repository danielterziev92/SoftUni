value = float(input())

if value >= 26 and value <= 35 :
    print('Hot')
elif value >= 20.1 and value <= 25.9 :
    print('Warm')
elif value >= 15 and value <= 20 :
    print('Mild')
elif value >= 12 and value <= 14.9 :
    print('Cool')
elif value >= 5 and value <= 11.9 :
    print('Cold')
elif value < 5 :
    print('unknown')
elif value > 36:
    print('unknown')