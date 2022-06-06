import re

food_info = input()
expression = r"([#|])(?P<item_name>[A-Za-z]+|[A-Za-z]+\s[A-Za-z]+)\1(?P<expiration_date>\d{2}/\d{2}/\d{2})\1(?P<calories>\d+)\1"
matches = re.finditer(expression, food_info)
foods = list()
calories = list()
for match in matches:
    name = match.group('item_name')
    expiration_date = match.group('expiration_date')
    cal = match.group('calories')
    calories.append(int(cal))
    foods.append([name, expiration_date, cal])

total_calories = sum(calories)
days_with_food = total_calories//2_000

print(f"You have food to last you for: {days_with_food} days!")
for food in foods:
    item_name = food[0]
    expiration_date = food[1]
    calories = food[2]
    print(f"Item: {item_name}, Best before: {expiration_date}, Nutrition: {calories}")
