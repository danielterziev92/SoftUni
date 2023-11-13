from django.db import models


class MoreBarcodes(models.Model):
    code = models.CharField(
        max_length=128,
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.code

