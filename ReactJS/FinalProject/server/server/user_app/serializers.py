from django.contrib.auth import get_user_model

from rest_framework import serializers

UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        # fields = '__all__'
        exclude = ('password', 'date_joined', 'groups', 'user_permissions')


class UserCreateSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, write_only=True)
    re_password = serializers.CharField(required=True, write_only=True)

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
#
#
# class UnauthenticatedUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email']
#
#
# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = ['id', 'name', 'price', 'quantity']
