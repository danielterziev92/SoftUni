number_of_cities = int(input())
total_profit = 0
for city in range(1, number_of_cities + 1):
    city_name = input()
    owner_earn = float(input())
    owner_expenses = float(input())
    additional_owner_expenses = 0
    if city % 5 == 0:
        owner_earn *= 0.9
    elif city % 3 == 0:
        owner_expenses *= 1.5

    profit = owner_earn - owner_expenses
    print(f"In {city_name} Burger Bus earned {profit:.2f} leva.")
    total_profit += profit
print(f"Burger Bus total profit: {total_profit:.2f} leva.")
