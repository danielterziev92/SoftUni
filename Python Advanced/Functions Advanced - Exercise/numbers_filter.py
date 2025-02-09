def even_odd_filter(**kwargs):
    def odd():
        result = []
        for value in kwargs['odd']:
            if int(value) % 2 != 0:
                result.append(value)
        return result

    def even():
        result = []
        for value in kwargs['even']:
            if int(value) % 2 == 0:
                result.append(value)
        return result

    result = {}

    if 'even' in kwargs:
        result['even'] = even()
    if 'odd' in kwargs:
        result['odd'] = odd()

    sorted_result = sorted(result.items(), key=lambda x: len(x[1]), reverse=True)
    result = dict((x, y) for x, y in sorted_result)
    return result


print(even_odd_filter(odd=[1, 2, 3, 4, 10, 5], even=[3, 4, 5, 7, 10, 2, 5, 5, 2], ))
print(even_odd_filter(odd=[2, 2, 30, 44, 10, 5],))