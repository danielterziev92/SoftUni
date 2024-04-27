from django.contrib.auth import get_user_model
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from django.utils.translation import gettext_lazy as _

from rest_framework import generics as api_views, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.utils import json

from server.core.mixins.session_mixin import SessionMixin
from server.user_app.models import UserProfile
from server.user_app.serializers import UserUpdateSerializer

from cloudinary import api as cloudinary_api, uploader as cloudinary_uploader

UserModel = get_user_model()


@method_decorator(csrf_protect, name='dispatch')
class UserUpdateAPIView(api_views.UpdateAPIView, SessionMixin):
    queryset = UserModel.objects.all()
    serializer_class = UserUpdateSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def put(self, request, *args, **kwargs):
        try:
            image_file = request.FILES.get('image', None)
            user_data = request.data.get('userData', None)

            if not user_data:
                return Response({'message': _('Data is missing')}, status=status.HTTP_404_NOT_FOUND)

            # Parse user data
            clear_user_data = json.loads(user_data)

            # Get user and user profile
            user = self.get_user_pk(session_id=request.COOKIES.get('sessionid'))
            user_profile = UserProfile.objects.get(user=user)
            folder_name = f'profile/{user.pk}'

            if image_file:
                if hasattr(user_profile.picture_url, 'public_id'):
                    cloudinary_uploader.destroy(public_id=user_profile.picture_url.public_id)

                if user_profile.picture_url is None:
                    cloudinary_api.create_folder(folder_name)

                # Upload image
                uploaded_picture = cloudinary_uploader.upload(
                    file=image_file, folder=folder_name,
                    # upload_preset='profile_picture'
                )
                clear_user_data['picture_url'] = uploaded_picture.get('public_id')
            else:
                clear_user_data['picture_url'] = user_profile.picture_url

            # Update user profile with new data
            are_equal, user_profile = self._check_new_and_old_data(user_profile, clear_user_data)
            if are_equal:
                user_profile.save()

            # Serialize user profile to JSON string
            profile_serializer = UserUpdateSerializer(user_profile)
            serialized_profile = profile_serializer.data

            return Response({'message': _('User data updated successfully'), 'data': serialized_profile},
                            status=status.HTTP_200_OK)
        except UserProfile.DoesNotExist:
            return Response({'message': _('Profile does not exist')}, status=status.HTTP_404_NOT_FOUND)

    @staticmethod
    def _check_new_and_old_data(old_data, new_data):
        are_equal = False

        for field, value in new_data.items():
            if getattr(old_data, field) != value:
                are_equal = True
                setattr(old_data, field, value)

        return are_equal, old_data
