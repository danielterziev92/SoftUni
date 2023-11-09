from rest_framework import generics as rest_views, views as api_views

from server.product.models import Group
from server.product.serializers import GroupSerializer


class GroupListView(rest_views.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class GroupCreateView(rest_views.CreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class GroupRetrieveView(rest_views.RetrieveAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    lookup_field = 'pk'


class GroupUpdateView(rest_views.UpdateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    lookup_field = 'pk'


class GroupDeleteView(rest_views.DestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    lookup_field = 'pk'
