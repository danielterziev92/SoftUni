def number_increment(numbers):
    def increase():
        result = [number + 1 for number in numbers]
        return result

    return increase()


print(number_increment([1, 2, 3]))
