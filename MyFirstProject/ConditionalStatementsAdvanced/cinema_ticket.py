day_of_the_week = input()
price_1 = ['Monday', 'Tuesday', 'Friday']
price_2 = ['Wednesday', 'Thursday']
price_3 = ['Saturday', 'Sunday']
if day_of_the_week in price_1:
    print(12)
elif day_of_the_week in price_2:
    print(14)
elif day_of_the_week in price_3:
    print(16)