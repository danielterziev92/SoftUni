from django.contrib.auth import get_user_model
from rest_framework.exceptions import ValidationError

from server.core.mixins.session_mixin import SessionMixin
from server.user_app.models import UserProfile

UserModel = get_user_model()


class UserInfoMixin:
    @classmethod
    def get_user_basic_data(cls, request=None, user: UserModel = None):
        """
        This method can retrieve user data either from a `request` object containing a session ID cookie,
        or directly from a `user` object if it is provided.

        Args:
            request (HttpRequest, optional): The HTTP request object containing the session ID cookie. Defaults to None.
            user (UserModel, optional): The user object whose data is to be retrieved. Defaults to None.
        :param request:
        :param user:
        :return:
        """
        if not user:
            user = SessionMixin.get_user_pk(session_id=request.COOKIES.get('sessionid'))

        return {
            'id': user.pk,
            'email': user.email
        }

    @classmethod
    def get_user_profile_data(cls, request=None, id=None):
        user_data = {}
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
            'picture_url': profile.get_profile_picture,
        }

        user_data.update(profile_data)
        return user_data
