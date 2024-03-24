from django.contrib.auth.models import User
from django.db import models


class Object(models.Model):
    name = models.CharField(
        max_length=50,
        unique=True,
        null=False,
        blank=False,
    )

    is_active = models.BooleanField(
        default=True,
        null=False,
        blank=False,
    )


class Group(models.Model):
    code = models.CharField(
        max_length=10,
        unique=True,
        null=True,
        blank=True,
    )

    name = models.CharField(
        max_length=50,
        null=False,
        blank=False,
    )

    parent_category = models.ForeignKey(
        'self',
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name='subcategories'
    )

    def __str__(self):
        return self.name


class Product(models.Model):
    code = models.CharField(
        max_length=10,
        unique=True,
        null=True,
        blank=True,
    )

    name = models.CharField(
        max_length=100,
        null=False,
        blank=False,
    )

    barcode = models.CharField(
        max_length=128,
        unique=True,
        null=True,
        blank=True,
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=3,
        null=False,
        blank=False,
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


class ProductInventory(models.Model):
    quantity = models.PositiveIntegerField(
        default=0,
        null=False,
        blank=False,
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        verbose_name='product'
    )

    object = models.ForeignKey(
        Object,
        on_delete=models.CASCADE,
        verbose_name='object'
    )
