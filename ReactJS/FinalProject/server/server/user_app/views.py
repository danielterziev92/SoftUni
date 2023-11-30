from rest_framework import generics as api_views, serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView

from server.user_app.serializers import AppTokenObtainPairSerializer, UserSerializer

from django.contrib.auth.models import User


class AppTokenObtainPairView(TokenObtainPairView):
    serializer_class = AppTokenObtainPairSerializer


class UserCreateView(api_views.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, validated_data):
        serializer = self.get_serializer(data=self.request.data)
        username = serializer.initial_data.get('username')
        email = serializer.initial_data.get('email')

        existing_user_by_username = User.objects.filter(username=username).exists()
        existing_user_by_email = User.objects.filter(email=email).exists()

        if existing_user_by_username:
            raise serializers.ValidationError({'message': 'Потребител с това потребителско име съществува'})

        if existing_user_by_email:
            raise serializers.ValidationError({'message': 'Потребител с този емейл съществува'})

        user = User.objects.create_user(**validated_data)
        return user


class UserRetrieveUpdateView(api_views.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


class UserListView(api_views.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
