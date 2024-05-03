from django.contrib.auth import get_user_model
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from django.utils.translation import gettext_lazy as _

from rest_framework import generics as api_views, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from server.user_app.serializers import UserCreateSerializer

UserModel = get_user_model()


@method_decorator(csrf_protect, name='dispatch')
class UserCreateView(api_views.CreateAPIView):
    permission_classes = (AllowAny,)

    queryset = UserModel.objects.all()
    serializer_class = UserCreateSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=self.request.data)
        email = serializer.initial_data.get('email')
        password = serializer.initial_data.get('password')
        re_password = serializer.initial_data.get('re_password')

        is_existing_user_by_email = UserModel.objects.filter(email=email).exists()

        if is_existing_user_by_email:
            return Response({'message': _('A user with this email already exists.')},
                            status=status.HTTP_400_BAD_REQUEST)

        if password != re_password:
            return Response({'message': _('Passwords do not match.')}, status=status.HTTP_400_BAD_REQUEST)

        if not serializer.is_valid():
            return

        validated_data = serializer.validated_data
        validated_data.pop('re_password', None)

        user = UserModel.objects.create_user(**validated_data)

        user_info = {
            'id': user.pk,
            'email': user.email,
        }

        return Response({'message': _('User created successfully.'), 'data': user_info}, status=status.HTTP_201_CREATED)
