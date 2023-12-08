from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from server.product.models import ProductBaseInformation


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


class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class AuthenticatedUserSerializer(serializers.ModelSerializer):
    product_count = serializers.SerializerMethodField()
    products = serializers.SerializerMethodField()

    def get_product_count(self, user):
        # Count the number of products associated with the user
        return ProductBaseInformation.objects.filter(user=user).count()

    def get_products(self, user):
        # Retrieve the list of products associated with the user
        products = ProductBaseInformation.objects.filter(user=user)
        return ProductSerializer(products, many=True).data

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'product_count', 'products']


class UnauthenticatedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductBaseInformation
        fields = ['id', 'name', 'price', 'quantity']
