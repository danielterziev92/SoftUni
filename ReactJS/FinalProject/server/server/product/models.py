from django.contrib.auth.models import User
from django.db import models


class DateInfoMixin(models.Model):
    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        abstract = True


class Object(DateInfoMixin):
    NAME_MAX_LENGTH = 50

    name = models.CharField(
        max_length=NAME_MAX_LENGTH,
        unique=True,
        null=False,
        blank=False,
    )

    is_active = models.BooleanField(
        default=True,
        null=False,
        blank=False,
    )
#
#
# class Group(models.Model):
#     CODE_MAX_LENGTH = 10
#     NAME_MAX_LENGTH = 50
#
#     code = models.CharField(
#         max_length=CODE_MAX_LENGTH,
#         unique=True,
#         null=True,
#         blank=True,
#     )
#
#     name = models.CharField(
#         max_length=NAME_MAX_LENGTH,
#         null=False,
#         blank=False,
#     )
#
#     parent_category = models.ForeignKey(
#         'self',
#         null=True,
#         blank=True,
#         on_delete=models.CASCADE,
#         related_name='subcategories'
#     )
#
#     def __str__(self):
#         return self.name
#
#
# class Product(models.Model):
#     CODE_MAX_LENGTH = 10
#     NAME_MAX_LENGTH = 100
#
#     code = models.CharField(
#         max_length=10,
#         unique=True,
#         null=True,
#         blank=True,
#     )
#
#     name = models.CharField(
#         max_length=100,
#         null=False,
#         blank=False,
#     )
#
#     price = models.DecimalField(
#         max_digits=10,
#         decimal_places=3,
#         null=False,
#         blank=False,
#     )
#
#     is_active = models.BooleanField(
#         default=True,
#     )
#
#     group = models.ForeignKey(
#         Group,
#         on_delete=models.RESTRICT,
#         null=False,
#         blank=False,
#     )
#
#
# class ProductBarcode(models.Model):
#     BARCODE_MAX_LENGTH = 128
#
#     barcode = models.CharField(
#         max_length=BARCODE_MAX_LENGTH,
#         unique=True,
#         null=False,
#         blank=False,
#     )
#
#     product = models.ForeignKey(
#         Product,
#         on_delete=models.RESTRICT,
#         related_name='barcodes'
#     )
#
#     def __str__(self):
#         return self.barcode
#
#
# class ProductInventory(models.Model):
#     quantity = models.PositiveIntegerField(
#         default=0,
#         null=False,
#         blank=False,
#     )
#
#     product = models.ForeignKey(
#         Product,
#         on_delete=models.CASCADE,
#         verbose_name='product'
#     )
#
#     object = models.ForeignKey(
#         Object,
#         on_delete=models.CASCADE,
#         verbose_name='object'
#     )
