from django.contrib.auth import get_user_model
from rest_framework.exceptions import ValidationError

from server.core.mixins.session_mixin import SessionMixin
from server.user_app.models import UserProfile

UserModel = get_user_model()


class UserInfoMixin:
    @classmethod
    def get_user_basic_data(cls, request=None, user: UserModel = None):
        if not user:
            user = SessionMixin.get_user_pk(session_id=request.COOKIES.get('sessionid'))

        return {
            'id': user.pk,
            'email': user.email
        }

    @classmethod
    def get_user_profile_data(cls, request=None, id=None):
        if id is not None:
            user_id = id
        elif request is not None:
            user_data = cls.get_user_basic_data(request)
            user_id = user_data['id']
        else:
            raise ValidationError("Either 'id' or 'request' must be provided")

        profile: UserProfile = UserProfile.objects.filter(user_id=user_id).first()

        profile_data = {
            'first_name': profile.first_name,
            'last_name': profile.last_name,
            'phone': profile.phone,
            'profile_url': profile.get_profile_picture,
        }

        return profile_data
