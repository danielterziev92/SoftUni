from rest_framework import serializers

from server.product.models import Group


class GroupListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class GroupDetailSerializer(serializers.ModelSerializer):
    subcategories = serializers.StringRelatedField(many=True)

    class Meta:
        model = Group
        fields = '__all__'


class GroupCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'
