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
