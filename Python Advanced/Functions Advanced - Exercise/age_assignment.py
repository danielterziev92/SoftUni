def age_assignment(*args, **kwargs):
    result = dict()
    for key, value in kwargs.items():
        for name in args:
            if name.startswith(key):
                result[name] = value

    sorted_result = sorted(result.items())
    final_result = ''
    for name, age in sorted_result:
        final_result += f'{name} is {age} years old.\n'

    return final_result


# print(age_assignment("Peter", "George", G=26, P=19))
print(age_assignment("Amy", "Bill", "Willy", W=36, A=22, B=61))
