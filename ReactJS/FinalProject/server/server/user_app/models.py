from django.contrib.auth import models as auth_models
from django.db import models
from django.core.validators import MinLengthValidator
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

from server.user_app.manager import UserAppManager
from server.utils.models_mixin import DateInfoMixin


class UserApp(auth_models.AbstractBaseUser, auth_models.PermissionsMixin):
    email = models.EmailField(
        unique=True,
        null=False,
        blank=False,
    )

    is_staff = models.BooleanField(
        default=False,
        null=False,
        blank=False,
    )

    is_active = models.BooleanField(
        default=True,
        null=False,
        blank=False,
    )

    date_created = models.DateTimeField(
        auto_now_add=True,
    )

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'

    objects = UserAppManager()

    class Meta:
        verbose_name = 'User'

    def __str__(self):
        return self.email


class UserBaseInfo(models.Model):
    FIRST_NAME_MAX_LENGTH = 30
    LAST_NAME_MAX_LENGTH = 30
    PHONE_MIN_LENGTH = 9
    PHONE_MAX_LENGTH = 9

    first_name = models.CharField(
        max_length=FIRST_NAME_MAX_LENGTH,
        null=False,
        blank=False,
    )

    last_name = models.CharField(
        max_length=LAST_NAME_MAX_LENGTH,
        null=False,
        blank=False,
    )

    phone = models.CharField(
        max_length=PHONE_MAX_LENGTH,
        validators=(MinLengthValidator(PHONE_MIN_LENGTH),),
        null=False,
        blank=False,
    )

    user = models.ForeignKey(
        UserApp,
        on_delete=models.CASCADE,
        related_name='users'
    )

    class Meta:
        verbose_name_plural = 'Users Base Information'

    def __str__(self):
        return self.user.email

    def clean(self):
        is_user_exist = UserBaseInfo.objects.filter(user=self.user).first()

        if is_user_exist and is_user_exist != self:
            raise ValidationError(_('A UserBaseInfo object already exists for this user.'))

    def save(self, *args, **kwargs):
        self.full_clean()

        super().save(*args, **kwargs)


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
        UserBaseInfo,
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
        UserBaseInfo
    )
