def vowel_filter(function):
    vowels = {'e', 'y', 'u', 'i', 'o', 'a'}

    def wrapper():
        chars = function()
        return [x for x in chars if x in vowels]

    return wrapper


@vowel_filter
def get_letters():
    return ["a", "b", "c", "d", "e"]


print(get_letters())
