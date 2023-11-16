from rest_framework import serializers

from server.product.models import ProductBaseInformation


class ProductListSerializer(serializers.ModelSerializer):
    # group_name = serializers.StringRelatedField(source='group.name', read_only=True)

    class Meta:
        model = ProductBaseInformation
        fields = ['id', 'code', 'name', 'price', 'quantity', 'is_active']


class ProductSerializer(serializers.ModelSerializer):
    group_name = serializers.StringRelatedField(source='group.name', read_only=True)

    class Meta:
        model = ProductBaseInformation
        fields = '__all__'
