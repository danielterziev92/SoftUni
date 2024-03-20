from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=500)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100, null=True, blank=True)
    supplier = models.CharField(max_length=150, null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True, editable=False, null=False, blank=False)
    last_edited_on = models.DateTimeField(auto_now=True, editable=False, null=False, blank=False)
    count = models.PositiveIntegerField(default=0, null=False, blank=False)
