from django.db import models
from django.utils.translation import gettext_lazy as _

from server.utils.models_mixin import DateInfoMixin


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


class Group(models.Model):
    CODE_MAX_LENGTH = 10
    NAME_MAX_LENGTH = 50

    code = models.CharField(
        max_length=CODE_MAX_LENGTH,
        unique=True,
        null=True,
        blank=True,
    )

    name = models.CharField(
        max_length=NAME_MAX_LENGTH,
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


class Unit(models.Model):
    NAME_MAX_LENGTH = 15

    name = models.CharField(
        max_length=NAME_MAX_LENGTH,
        null=False,
        blank=False,
    )


class Product(models.Model):
    class ProductType(models.IntegerChoices):
        STANDARD = 1, _('Standard')
        SERVICE = 2, _('Service')
        PAYMENT = 3, _('Payment')

    class VatGroup(models.IntegerChoices):
        A = 1, _('А (0%)')
        B = 2, _('Б (20%)')
        C = 3, _('В (20%)')
        D = 4, _('Г (9%)')

    CODE_MAX_LENGTH = 10
    NAME_MAX_LENGTH = 100
    PRICE_MAX_DIGITS = 10
    PRICE_DECIMAL_PLACES = 3
    TYPE_MAX_LENGTH = 2
    VAT_GROUP_MAX_LENGTH = 1

    code = models.CharField(
        max_length=CODE_MAX_LENGTH,
        unique=True,
        null=True,
        blank=True,
    )

    name = models.CharField(
        max_length=NAME_MAX_LENGTH,
        null=False,
        blank=False,
    )

    is_active = models.BooleanField(
        default=True,
    )

    type = models.CharField(
        max_length=max(key for key, _ in ProductType.choices),
        choices=ProductType.choices,
        default=ProductType.STANDARD,
        null=False,
        blank=False,
    )

    vat_group = models.CharField(
        max_length=max(key for key, _ in VatGroup.choices),
        choices=VatGroup.choices,
        default=VatGroup.B,
        null=False,
        blank=False,
    )

    measure = models.ForeignKey(
        Unit,
        on_delete=models.CASCADE,
        default=1,
        null=False,
        blank=False,
    )

    group = models.ForeignKey(
        Group,
        on_delete=models.RESTRICT,
        default=1,
        null=False,
        blank=False,
    )

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


# class ProductInventory(models.Model):
#     QUANTITY_DEFAULT_VALUE = 0
#
#     quantity = models.PositiveIntegerField(
#         default=QUANTITY_DEFAULT_VALUE,
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
