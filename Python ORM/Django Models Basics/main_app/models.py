from django.db import models


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
