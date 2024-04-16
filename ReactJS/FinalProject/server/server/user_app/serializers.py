from django.conf import settings
from django.contrib.auth import get_user_model

from rest_framework import serializers
from rest_framework.utils.json import dumps

from server.user_app.models import UserProfile

UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        # fields = '__all__'
        exclude = ('password', 'date_joined', 'groups', 'user_permissions')


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'


class UserCreateSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, write_only=True)
    re_password = serializers.CharField(required=True, write_only=True)


class UserUpdateSerializer(serializers.ModelSerializer):
    picture_url = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = ['first_name', 'last_name', 'phone', 'picture_url']

    def get_picture_url(self, obj):
        picture_url = getattr(obj, 'picture_url', None)
        if picture_url:
            return f'{picture_url.url}.jpg'
        return None


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

# class AuthenticatedUserSerializer(serializers.ModelSerializer):
#     product_count = serializers.SerializerMethodField()
#     products = serializers.SerializerMethodField()
#
#     def get_product_count(self, user):
#         # Count the number of products associated with the user
#         return Product.objects.filter(user=user).count()
#
#     def get_products(self, user):
#         # Retrieve the list of products associated with the user
#         products = Product.objects.filter(user=user)
#         return ProductSerializer(products, many=True).data
#
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email', 'product_count', 'products']
