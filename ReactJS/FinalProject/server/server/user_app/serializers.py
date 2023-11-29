from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class AppTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username
        token['email'] = user.email

        return token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = '__all__'
        exclude = ('password', 'date_joined', 'groups', 'user_permissions')

    def create(self, validated_data):
        username = validated_data.get('username')
        email = validated_data.get('email')

        existing_user_by_username = User.objects.filter(username=username).exists()
        existing_user_by_email = User.objects.filter(email=email).exists()

        if existing_user_by_username:
            raise serializers.ValidationError({'message': 'Потребител с това потребителско име съществува'})

        if existing_user_by_email:
            raise serializers.ValidationError({'message': 'Потребител с този емейл съществува'})

        user = User.objects.create_user(**validated_data)
        return user
