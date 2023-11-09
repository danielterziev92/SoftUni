from rest_framework import serializers

from server.product.models import Group


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        field = '__all__'
