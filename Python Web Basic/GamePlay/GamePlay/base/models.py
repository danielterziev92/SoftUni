from django.db import models
from django.core import validators

from GamePlay.base.common import Choices


class Profile(models.Model):
    PASSWORD_MAX_LENGTH = 30
    FIRST_NAME_MAX_LENGTH = 30
    LAST_NAME_MAX_LENGTH = 30

    email = models.EmailField(
        null=False,
        blank=False,
    )

    age = models.PositiveSmallIntegerField(
        validators=(validators.MinValueValidator(12),),
        null=False,
        blank=False,
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

    profile = models.URLField(
        null=True,
        blank=True,
    )


class Game(models.Model):
    TITLE_MAX_LENGTH = 30
    CATEGORY_CHOICES = Choices("Action", "Adventure", "Puzzle", "Strategy", "Sports", "Board/Card Game", "Other")

    title = models.CharField(
        max_length=TITLE_MAX_LENGTH,
        unique=True,
        null=False,
        blank=False,
    )

    category = models.CharField(
        max_length=CATEGORY_CHOICES.max_length(),
        choices=CATEGORY_CHOICES.get_all_choices(),
        null=False,
        blank=False,
    )

    rating = models.FloatField(
        validators=(validators.MinValueValidator(0.1), validators.MaxValueValidator(5),),
        null=False,
        blank=False,
    )

    max_level = models.PositiveSmallIntegerField(
        validators=(validators.MinValueValidator(1),),
        null=True,
        blank=True,
    )

    image_url = models.URLField(
        null=False,
        blank=False,
    )

    summary = models.TextField(
        null=True,
        blank=True,
    )
