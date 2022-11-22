def type_check(type_of_var):
    def wrapper(func):
        def inner_wrapper(numb):
            if not isinstance(numb, type_of_var):
                return 'Bad Type'
            return func(numb)

        return inner_wrapper

    return wrapper


@type_check(int)
def times2(num):
    return num * 2


print(times2(2))
print(times2('Not A Number'))


@type_check(str)
def first_letter(word):
    return word[0]


print(first_letter('Hello World'))
print(first_letter(['Not', 'A', 'String']))
