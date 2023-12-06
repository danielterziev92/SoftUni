from rest_framework import serializers

from server.product.models import Group


class GroupListSerializer(serializers.ModelSerializer):
    parent_category_name = serializers.SerializerMethodField()

    def get_parent_category_name(self, obj):
        # Return the name of the parent category if it exists
        parent_category = obj.parent_category
        return parent_category.name if parent_category else None

    class Meta:
        model = Group
        fields = ['id', 'code', 'name', 'parent_category_name']


class GroupDetailSerializer(serializers.ModelSerializer):
    subcategories = serializers.StringRelatedField(many=True)

    class Meta:
        model = Group
        fields = '__all__'


class GroupCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'
