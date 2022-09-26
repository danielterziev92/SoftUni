import re


def concatenate(*args, **kwargs):
    result = ''.join([*args])
    for key in kwargs:
        regex = fr'({key})'
        matches = re.finditer(regex, result)
        for match in matches:
            start = match.start()
            end = match.end()
            result = result[:start] + kwargs[key] + result[end:]
    return result


print(concatenate("Soft", "UNI", "Is", "Grate", "!", UNI="Uni", Grate="Great"))
print(concatenate("I", " ", "Love", " ", "Cythons", C="P", s="", java='Java'))
