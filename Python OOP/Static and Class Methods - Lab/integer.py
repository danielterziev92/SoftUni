from math import floor


class Integer:

    def __init__(self, value: int):
        self.value = value

    @classmethod
    def from_float(cls, float_value: float):
        if type(float_value) != float:
            return 'value is not a float'

        return cls(floor(float_value))

    @classmethod
    def from_roman(cls, value):
        x = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        y = 0
        for i in range(len(value)):
            if i > 0 and x[value[i]] > x[value[i - 1]]:
                y += x[value[i]] - 2 * x[value[i - 1]]
            else:
                y += x[value[i]]

        return cls(y)

    @classmethod
    def from_string(cls, value):
        if type(value) != str:
            return 'wrong type'
        return cls(int(value))


first_num = Integer(10)
print(first_num.value)

second_num = Integer.from_roman("IV")
print(second_num.value)
print(Integer.from_float("2.6"))
print(Integer.from_string(2.6))
