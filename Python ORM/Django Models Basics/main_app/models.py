from django.db import models
from django.utils.translation import gettext_lazy as _


class Employee(models.Model):
    name = models.CharField(
        max_length=30,
        null=False,
        blank=False,
    )

    email_address = models.EmailField(
        null=False,
        blank=False,
    )

    photo = models.URLField(
        null=False,
        blank=False,
    )

    birth_date = models.DateField(
        null=False,
        blank=False,
    )

    works_full_time = models.BooleanField(
        null=False,
        blank=False,
    )

    created_on = models.DateTimeField(
        auto_now_add=True,
        null=False,
        blank=False,
    )


class Department(models.Model):
    class LocationTowns(models.TextChoices):
        SOFIA = "Sofia", _("Sofia")
        PLOVDIV = "Plovdiv", _("Plovdiv")
        BURGAS = "Burgas", _("Burgas")
        VARNA = "Varna", _("Varna")

    code = models.CharField(
        max_length=4,
        primary_key=True,
        unique=True,
        null=False,
        blank=False,
    )

    name = models.CharField(
        max_length=50,
        unique=True,
        null=False,
        blank=False,
    )

    employees_count = models.PositiveIntegerField(
        default=1,
        null=False,
        blank=False,
        verbose_name='Employees Count',
    )

    location = models.CharField(
        max_length=20,
        choices=LocationTowns.choices,
        null=False,
        blank=False,
    )

    last_edited_on = models.DateTimeField(
        auto_now=True,
        null=False,
        blank=False,
    )
