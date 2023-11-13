from rest_framework import generics as rest_views

from server.product.models import Group
from server.product.groups.serializers import GroupListSerializer, GroupDetailSerializer, GroupCreateSerializer


class GroupListView(rest_views.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupListSerializer


class GroupDetailView(rest_views.RetrieveUpdateDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupDetailSerializer


class GroupCreateView(rest_views.CreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupCreateSerializer
