from django.db import models
from django.core import validators

from Fruitipedia.base.validators import only_letters_validator
from Fruitipedia.base.validators import start_with_letter_validator


class Profile(models.Model):
    FIRST_NAME_MAX_LENGTH = 25
    FIRST_NAME_MIN_LENGTH = 2
    LAST_NAME_MAX_LENGTH = 35
    LAST_NAME_MIN_LENGTH = 1
    EMAIL_MAX_LENGTH = 40
    PASSWORD_MAX_LENGTH = 20
    PASSWORD_MIN_LENGTH = 8

    first_name = models.CharField(
        max_length=FIRST_NAME_MAX_LENGTH,
        validators=(
            validators.MinLengthValidator(FIRST_NAME_MIN_LENGTH),
            start_with_letter_validator,
        ),
        null=False,
        blank=False,
    )

    last_name = models.CharField(
        max_length=LAST_NAME_MAX_LENGTH,
        validators=(
            validators.MinLengthValidator(LAST_NAME_MIN_LENGTH),
            start_with_letter_validator,
        ),
        null=False,
        blank=False,
    )

    email = models.EmailField(
        max_length=EMAIL_MAX_LENGTH,
        null=False,
        blank=False,
    )

    password = models.CharField(
        max_length=PASSWORD_MAX_LENGTH,
        validators=(
            validators.MinLengthValidator(PASSWORD_MIN_LENGTH),
        ),
        null=False,
        blank=False,
    )

    image_url = models.URLField(
        null=True,
        blank=True,
    )

    age = models.PositiveSmallIntegerField(
        default=18,
    )

    @property
    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'


class Fruit(models.Model):
    NAME_MAX_LENGTH = 30
    NAME_MIN_LENGTH = 2

    name = models.CharField(
        max_length=NAME_MAX_LENGTH,
        validators=(
            validators.MinLengthValidator(NAME_MIN_LENGTH),
            only_letters_validator,
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

    nutrition = models.TextField(
        null=True,
        blank=True,
    )
