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


class Student(models.Model):
    first_name = models.CharField(
        max_length=50,
        null=False,
        blank=False,
    )

    last_name = models.CharField(
        max_length=50,
        null=False,
        blank=False,
    )

    age = models.PositiveIntegerField(
        null=False,
        blank=False,
    )

    grade = models.CharField(
        max_length=10,
        null=False,
        blank=False,
    )

    date_of_birth = models.DateField(
        null=False,
        blank=False,
    )

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Supplier(models.Model):
    name = models.CharField(
        max_length=100,
        null=False,
        blank=False,
    )

    contact_person = models.CharField(
        max_length=50,
        null=False,
        blank=False,
    )

    email = models.EmailField(
        unique=True,
        null=False,
        blank=False,
    )

    phone = models.CharField(
        max_length=20,
        unique=True,
        null=False,
        blank=False,
    )

    address = models.TextField(
        null=False,
        blank=False,
    )

    def __str__(self):
        return f'{self.name} - {self.phone}'


class Course(models.Model):
    title = models.CharField(
        max_length=90,
        null=False,
        blank=False,
    )

    lecturer = models.CharField(
        max_length=90,
        null=False,
        blank=False,
    )

    description = models.TextField(
        max_length=200,
        null=False,
        blank=False,
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    start_date = models.DateField(
        auto_now_add=True,
        null=False,
        blank=False,
    )

    is_published = models.BooleanField(
        default=True,
        null=False,
        blank=False,
    )

    def __str__(self):
        return f'{self.title} - {self.lecturer}'
