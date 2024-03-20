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
