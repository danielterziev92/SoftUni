def naughty_or_nice_list(*args, **kwargs):
    kids_categories = {
        'Nice': [],
        'Naughty': [],
        'Not Found': [],
    }

    kids = args[0]

    categories_numbers = {}

    for arg in args[1::]:
        numb, category = arg.split('-')
        categories_numbers[numb] = category

    for kid in kids:
        category_number, kid_name = kid
        if str(category_number) in categories_numbers:
            kids_categories[categories_numbers[str(category_number)]].append(kid_name)
        else:
            kids_categories['Not Found'].append(kid_name)

    for name, category in kwargs.items():
        for kid_category in kids_categories:
            if name in kids_categories[kid_category]:
                kids_categories[kid_category].remove(name)
                kids_categories[category].append(name)

    result = ''
    for category, names in kids_categories.items():
        if names:
            result += f'{category}: {", ".join(names)}\n'

    return result


print(naughty_or_nice_list(
    [
        (3, "Amy"),
        (1, "Tom"),
        (7, "George"),
        (3, "Katy"),
    ],
    "3-Nice",
    "1-Naughty",
    Amy="Nice",
    Katy="Naughty",
))

print(naughty_or_nice_list(
    [
        (7, "Peter"),
        (1, "Lilly"),
        (2, "Peter"),
        (12, "Peter"),
        (3, "Simon"),
    ],
    "3-Nice",
    "5-Naughty",
    "2-Nice",
    "1-Nice",
    ))

print(naughty_or_nice_list(
    [
        (6, "John"),
        (4, "Karen"),
        (2, "Tim"),
        (1, "Merry"),
        (6, "Frank"),
    ],
    "6-Nice",
    "5-Naughty",
    "4-Nice",
    "3-Naughty",
    "2-Nice",
    "1-Naughty",
    Frank="Nice",
    Merry="Nice",
    John="Naughty",
))