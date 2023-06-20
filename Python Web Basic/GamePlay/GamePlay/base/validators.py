from django.core.exceptions import ValidationError
from django.utils.deconstruct import deconstructible


@deconstructible
class BetweenTwoNumberValidator:
    def __init__(self, min_number, max_number):
        self.min_number = min_number
        self.max_number = max_number

    def __call__(self, value):
        if value > self.age:
            raise ValidationError(f'The value must be between {self.min_number} and {self.max_number}')

    def __eq__(self, other):
        return (isinstance(other, self.__class__)
                and other.min_number == self.min_number
                and other.max_number == self.max_number
                )
