from django.core.validators import MinLengthValidator
from django.db import models

from MyPlantsApp.base.validators import first_letter_of_string_to_be_capital_validator, only_letter_validator


class Choices:
    def __init__(self, *args):
        self.choices = args

    @staticmethod
    def return_string_with_underscore(value):
        new_value = value.lower().split(' ')
        return '_'.join(new_value)

    def get_all_choices(self):
        return tuple((self.return_string_with_underscore(choice), choice) for choice in self.choices)


class Profile(models.Model):
    USERNAME_MIN_LENGTH = 2
    USERNAME_MAX_LENGTH = 10
    FIRST_NAME_MAX_LENGTH = 20
    LAST_NAME_MAX_LENGTH = 20

    username = models.CharField(
        max_length=USERNAME_MAX_LENGTH,
        null=False,
        blank=False,
        validators=(MinLengthValidator(USERNAME_MIN_LENGTH),)
    )

    first_name = models.CharField(
        max_length=FIRST_NAME_MAX_LENGTH,
        null=False,
        blank=False,
        validators=(first_letter_of_string_to_be_capital_validator,)
    )

    last_name = models.CharField(
        max_length=LAST_NAME_MAX_LENGTH,
        null=False,
        blank=False,
        validators=(first_letter_of_string_to_be_capital_validator,)
    )

    profile_picture = models.URLField(
        null=True,
        blank=True,
    )

    @property
    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'


class Plant(models.Model):
    TYPE_MAX_LENGTH = 14
    TYPE_CHOICES = Choices('Outdoor Plants', 'Indoor Plants')
    NAME_MAX_LENGTH = 20

    type = models.CharField(
        max_length=TYPE_MAX_LENGTH,
        choices=TYPE_CHOICES.get_all_choices(),
        null=False,
        blank=False,
    )

    name = models.CharField(
        max_length=NAME_MAX_LENGTH,
        validators=(
            only_letter_validator,
            MinLengthValidator(2),
        ),
        null=False,
        blank=False,
    )

    image_url = models.URLField(
        null=False,
        blank=False,
    )

    description = models.TextField(
        null=False,
        blank=False,
    )

    price = models.FloatField()

    @property
    def get_price(self):
        return f'{self.price:.2f}'
