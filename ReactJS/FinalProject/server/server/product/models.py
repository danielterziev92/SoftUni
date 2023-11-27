from django.contrib.auth.models import User
from django.db import models
from cloudinary import models as cloudinary_models


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


class ProductBaseInformation(models.Model):
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

    quantity = models.PositiveIntegerField(
        null=True,
        blank=True,
    )

    picture = cloudinary_models.CloudinaryField(
        null=True,
        blank=True,
    )

    is_active = models.BooleanField(
        default=True,
    )

    user = models.ForeignKey(
        User,
        on_delete=models.RESTRICT,
        null=False,
        blank=False,
    )

    group = models.ForeignKey(
        Group,
        on_delete=models.RESTRICT,
        null=False,
        blank=False,
    )


class ProductAdditionalInfo(models.Model):
    product = models.AutoField(
        primary_key=True
    )

    description = models.CharField(
        max_length=255,
        null=True,
        blank=True,
    )


class MoreBarcodes(models.Model):
    code = models.CharField(
        max_length=128,
        null=True,
        blank=True,
    )

    product = models.ForeignKey(
        ProductBaseInformation,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
    )

    def __str__(self):
        return self.code
