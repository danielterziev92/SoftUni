from rest_framework import serializers

from server.product.models import ProductAdditionalInfo, MoreBarcodes


class ProductInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductAdditionalInfo
        fields = '__all__'


class MoreBarcodesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MoreBarcodes
        fields = '__all__'
