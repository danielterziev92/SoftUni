class Choices:
    def __init__(self, *args):
        self.choices = args

    @staticmethod
    def return_string_with_underscore(value):
        new_value = value.lower().split(' ')
        return '_'.join(new_value)

    def get_all_choices(self):
        return tuple((self.return_string_with_underscore(choice), choice) for choice in self.choices)

    def max_length(self):
        return max(len(choice) for choice in self.choices)
