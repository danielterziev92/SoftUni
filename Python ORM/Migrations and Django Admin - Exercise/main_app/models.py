from django.db import models


class Shoe(models.Model):
    brand = models.CharField(
        max_length=25,
        null=False,
        blank=False,
    )

    size = models.PositiveIntegerField(
        null=False,
        blank=False,
    )


class UniqueBrands(models.Model):
    brand_name = models.CharField(
        max_length=25,
        unique=True,
        null=False,
        blank=False,
    )


class EventRegistration(models.Model):
    event_name = models.CharField(
        max_length=60,
        null=False,
        blank=False,
    )

    participant_name = models.CharField(
        max_length=50,
        null=False,
        blank=False,
    )

    registration_date = models.DateField(
        null=False,
        blank=False,
    )

    def __str__(self):
        return f'{self.participant_name} - {self.event_name}'


class Movie(models.Model):
    title = models.CharField(
        max_length=100,
        null=False,
        blank=False,
    )

    director = models.CharField(
        max_length=100,
        null=False,
        blank=False,
    )

    release_year = models.PositiveIntegerField(
        null=False,
        blank=False,
    )

    genre = models.CharField(
        max_length=50,
        null=False,
        blank=False,
    )

    def __str__(self):
        return f'Movie "{self.title}" by {self.director}'
