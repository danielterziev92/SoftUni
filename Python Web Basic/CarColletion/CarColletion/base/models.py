from django.core.validators import MinLengthValidator, MinValueValidator
from django.db import models

from CarColletion.base.common import Choices
from CarColletion.base.validators import BetweenTwoYearsValidator


class Profile(models.Model):
    USERNAME_MIN_LENGTH = 2
    USERNAME_MAX_LENGTH = 10
    PASSWORD_MAX_LENGTH = 30
    FIRST_NAME_MAX_LENGTH = 30
    LAST_NAME_MAX_LENGTH = 30

    username = models.CharField(
        max_length=USERNAME_MAX_LENGTH,
        null=False,
        blank=False,
        validators=(MinLengthValidator(USERNAME_MIN_LENGTH),),
    )

    email = models.EmailField(
        null=False,
        blank=False,
    )

    age = models.PositiveSmallIntegerField(
        null=False,
        blank=False,
        validators=(MinValueValidator(18),)
    )

    password = models.CharField(
        max_length=PASSWORD_MAX_LENGTH,
        null=False,
        blank=False,
    )

    first_name = models.CharField(
        max_length=FIRST_NAME_MAX_LENGTH,
        null=True,
        blank=True,
    )

    last_name = models.CharField(
        max_length=LAST_NAME_MAX_LENGTH,
        null=True,
        blank=True,
    )

    profile_picture = models.URLField(
        null=True,
        blank=True,
    )

    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'


class Car(models.Model):
    CHOICES = Choices("Sports Car", "Pickup", "Crossover", "Minibus", "Other")
    MODEL_MIN_LENGTH = 2
    MODEL_MAX_LENGTH = 20

    type = models.CharField(
        max_length=CHOICES.max_length(),
        choices=CHOICES.get_all_choices(),
        null=False,
        blank=False,
    )

    model = models.CharField(
        max_length=MODEL_MAX_LENGTH,
        validators=(MinLengthValidator(MODEL_MIN_LENGTH),),
        null=False,
        blank=False,
    )

    year = models.PositiveSmallIntegerField(
        validators=(BetweenTwoYearsValidator(1980, 2049),),
        null=False,
        blank=False,
    )

    image_url = models.URLField(
        null=False,
        blank=False,
    )

    price = models.DecimalField(
        validators=(MinValueValidator(1),),
        max_digits=8,
        decimal_places=2,
        null=False,
        blank=False,
    )
