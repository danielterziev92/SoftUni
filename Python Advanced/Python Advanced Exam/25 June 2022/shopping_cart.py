def shopping_cart(*args):
    result = ''
    is_empty = 0
    collected_meals = {
        'Soup': [],
        'Pizza': [],
        'Dessert': [],
    }
    products_limit = {
        'Soup': 3,
        'Pizza': 4,
        'Dessert': 2,
    }

    for arg in args:

        if arg == 'Stop':
            break

        meal, product = arg

        if product in collected_meals[meal]:
            continue

        if len(collected_meals[meal]) < products_limit[meal]:
            collected_meals[meal].append(product)

    for products in collected_meals.values():
        if len(products) == 0:
            is_empty += 1

    if is_empty == 3:
        return 'No products in the cart!'

    for meal, products in sorted(collected_meals.items(), key=lambda x: (-len(x[1]), x[0])):
        result += f'{meal}:\n'
        for product in sorted(products):
            result += f' - {product}\n'

    return result


# print(shopping_cart(
#     ('Pizza', 'ham'),
#     ('Soup', 'carrots'),
#     ('Pizza', 'cheese'),
#     ('Pizza', 'flour'),
#     ('Dessert', 'milk'),
#     ('Pizza', 'mushrooms'),
#     ('Pizza', 'tomatoes'),
#     'Stop',
# ))

# print(shopping_cart(
#     ('Pizza', 'ham'),
#     ('Dessert', 'milk'),
#     ('Pizza', 'ham'),
#     'Stop',
# ))

print(shopping_cart(
    'Stop',
    ('Pizza', 'ham'),
    ('Pizza', 'mushrooms'),
))
