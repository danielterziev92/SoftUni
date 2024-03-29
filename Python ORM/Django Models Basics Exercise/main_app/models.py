from django.db import models
from django.utils.translation import gettext_lazy as _


class Person(models.Model):
    name = models.CharField(
        max_length=30,
        null=False,
        blank=False,
    )

    age = models.PositiveIntegerField(
        null=False,
        blank=False,
    )


class Blog(models.Model):
    post = models.TextField(
        null=False,
        blank=False,
    )

    author = models.CharField(
        max_length=35,
        null=False,
        blank=False,
    )


class WeatherForecast(models.Model):
    date = models.DateField(
        null=False,
        blank=False,
    )

    temperature = models.FloatField(
        null=False,
        blank=False,
    )

    humidity = models.FloatField(
        null=False,
        blank=False,
    )

    precipitation = models.FloatField(
        null=False,
        blank=False,
    )


class Recipe(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True,
        null=False,
        blank=False,
    )

    description = models.TextField(
        null=False,
        blank=False,
    )

    ingredients = models.TextField(
        null=False,
        blank=False,
    )

    cook_time = models.PositiveIntegerField(
        null=False,
        blank=False,
    )

    created_at = models.DateTimeField(
        auto_now=True,
        null=False,
        blank=False,
    )


class Product(models.Model):
    name = models.CharField(
        max_length=70,
        null=False,
        blank=False,
    )

    description = models.TextField(
        null=False,
        blank=False,
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=False,
        blank=False,
    )

    created_at = models.DateTimeField(
        auto_now=True,
        null=False,
        blank=False,
    )


class UserProfile(models.Model):
    username = models.CharField(
        max_length=65,
        unique=True,
        null=False,
        blank=False,
    )

    first_name = models.CharField(
        max_length=40,
        unique=True,
        null=False,
        blank=False,
    )

    last_name = models.CharField(
        max_length=40,
        unique=True,
        null=False,
        blank=False,
    )

    email = models.EmailField(
        unique=True,
        default='students@softuni.bg'
    )

    bio = models.TextField(
        max_length=120,
        null=False,
        blank=False,
    )

    profile_image_url = models.URLField(
        null=False,
        blank=False,
    )

    created_at = models.DateTimeField(
        auto_now=True,
        null=False,
        blank=False,
    )


class Exercise(models.Model):
    name = models.CharField(
        max_length=100,
        null=False,
        blank=False,
    )

    description = models.TextField(
        null=False,
        blank=False,
    )

    difficulty_level = models.CharField(
        max_length=20,
        null=False,
        blank=False,
    )

    duration_minutes = models.PositiveIntegerField(
        null=False,
        blank=False,
    )

    equipment = models.CharField(
        max_length=90,
        null=False,
        blank=False,
    )

    video_url = models.URLField(
        null=True,
        blank=True,
    )

    calories_burned = models.PositiveIntegerField(
        default=0,
        null=False,
        blank=False,
    )

    is_favorite = models.BooleanField(
        default=False,
        null=False,
        blank=False,
    )


class Book(models.Model):
    class GenreChoices(models.TextChoices):
        FICTION = 'Fiction', _('Fiction')
        NON_FICTION = 'Non-Fiction', _('Non-Fiction')
        SCIENCE_FICTION = 'Science Fiction', _('Science Fiction')
        HORROR = 'Horror', _('Horror')

    title = models.CharField(
        max_length=30,
        null=False,
        blank=False,
    )

    author = models.CharField(
        max_length=100,
        null=False,
        blank=False,
    )

    genre = models.CharField(
        max_length=20,
        choices=GenreChoices.choices,
        null=False,
        blank=False,
    )

    publication_date = models.DateField(
        auto_now=True,
        editable=False,
        null=False,
        blank=False,
    )

    price = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        null=False,
        blank=False,
    )

    is_available = models.BooleanField(
        default=True,
        null=False,
        blank=False,
    )

    rating = models.FloatField(
        null=False,
        blank=False,
    )

    description = models.TextField(
        null=False,
        blank=False,
    )

    def __str__(self):
        return self.title
