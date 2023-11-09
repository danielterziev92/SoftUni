from django.db import models


class Barcode(models.Model):
    code = models.CharField(
        max_length=128,
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.code


class Group(models.Model):
    code = models.CharField(
        max_length=10,
        null=True,
        blank=True,
    )

    name = models.CharField(
        max_length=50,
        null=False,
        blank=False,
    )
