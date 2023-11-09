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

    def __str__(self):
        return self.name


class Product(models.Model):
    code = models.CharField(
        max_length=10,
        null=True,
        blank=True,
    )

    name = models.CharField(
        max_length=100,
        null=False,
        blank=False,
    )

    description = models.CharField(
        max_length=255,
        null=True,
        blank=True,
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=3,
    )

    is_active = models.BooleanField(
        default=True,
    )

    group = models.ForeignKey(
        Group,
        on_delete=models.RESTRICT,
        null=False,
        blank=False,
    )

    barcode = models.ManyToManyField(
        Barcode,
        blank=True,
    )
