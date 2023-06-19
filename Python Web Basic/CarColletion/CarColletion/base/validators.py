from django.core.exceptions import ValidationError
from django.utils.deconstruct import deconstructible


@deconstructible
class BetweenTwoYearsValidator:
    def __init__(self, first_year, second_year):
        self.first_year = first_year
        self.second_year = second_year

    def __call__(self, value):
        if value <= self.first_year or value >= self.second_year:
            raise ValidationError(f'Year must be between {self.first_year} and {self.second_year}')

    def __eq__(self, other):
        return (
                isinstance(other, self.__class__)
                and other.first_year == self.first_year
                and other.second_year == self.second_year
        )
