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
