from rest_framework import serializers

from server.product.models import ProductAdditionalInfo


class ProductInfoDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductAdditionalInfo
        fields = '__all__'


class ProductInfoCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductAdditionalInfo
        fields = '__all__'
