def grocery_store(**kwargs):
    sorted_result = sorted(kwargs.items(), key=lambda x: (-x[1], -len(x[0]), x[0]))
    final_result = ''
    for key, value in sorted_result:
        final_result += f'{key}: {value}\n'
    return final_result


print(grocery_store(bread=5, pasta=12, eggs=12, ))
print(grocery_store(bread=2, pasta=2, eggs=20, carrot=1, ))