from django.contrib.auth import get_user_model
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect

from rest_framework import generics as api_views, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from cloudinary import api as cloudinary_api, uploader as cloudinary_uploader

from server.core.mixins.session_mixin import SessionMixin
from server.user_app.models import UserProfile
from server.user_app.serializers import UserUpdateSerializer

UserModel = get_user_model()


@method_decorator(csrf_protect, name='dispatch')
class UserUpdateAPIView(api_views.UpdateAPIView, SessionMixin):
    queryset = UserModel.objects.all()
    serializer_class = UserUpdateSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def put(self, request, *args, **kwargs):
        image_file = request.FILES.get('image', None)
        user_data = request.data.get('userData', None)
        user = SessionMixin.get_user_pk(session_id=request.COOKIES.get('sessionid'))
        user_profile = UserProfile.objects.get(user=user)

        if not image_file or not user_data:
            return Response({'error': 'Image or data missing'}, status=status.HTTP_400_BAD_REQUEST)

        if image_file:
            folder_name = f'profile/{user.pk}'
            if user_profile.profile_picture == '':
                cloudinary_api.create_folder(folder_name)

            cloudinary_uploader.upload(file=image_file, folder=folder_name, eager=[
                {
                    "width": 400, "height": 400,
                    "crop": "crop",
                }
            ])

        print('Image:', image_file)
        print('UserData:', user_data)

        return Response({'message': 'User data updated successfully'}, status=status.HTTP_200_OK)
