from django.db import models

from server.utils.models_mixin import DateInfoMixin

from server.user_app.models import UserProfile


class Company(DateInfoMixin):
    NAME_MAX_LENGTH = 100
    TOWN_MAX_LENGTH = 50
    ADDRESS_MAX_LENGTH = 200

    name = models.CharField(
        max_length=NAME_MAX_LENGTH,
        null=False,
        blank=False,
    )

    town = models.CharField(
        max_length=TOWN_MAX_LENGTH,
        null=False,
        blank=False,
    )

    address = models.CharField(
        max_length=ADDRESS_MAX_LENGTH,
        null=False,
        blank=False,
    )

    owner = models.ForeignKey(
        UserProfile,
        on_delete=models.CASCADE,
        related_name='owner'
    )

    class Meta:
        verbose_name_plural = 'Companies'

    def __str__(self):
        return self.name


class CompanyMembers(models.Model):
    company = models.ForeignKey(
        Company,
        on_delete=models.CASCADE,
        related_name='Company'
    )

    members = models.ManyToManyField(
        UserProfile
    )

    class Meta:
        verbose_name_plural = 'Company Members'
