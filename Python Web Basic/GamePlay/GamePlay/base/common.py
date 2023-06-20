class Choices:
    def __init__(self, *args):
        self.values = args

    @staticmethod
    def get_string_with_underscore(value: str):
        new_value = value.lower().split(' ')
        return '_'.join(new_value)

    def get_all_choices(self):
        return tuple((self.get_string_with_underscore(value), value) for value in self.values)

    def max_length(self):
        return max(len(value) for value in self.values)
