from rest_framework import generics as rest_views, views as api_views

from server.product.models import Group
from server.product.serializers import GroupSerializer


class GroupListCreateView(rest_views.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class GroupRetrieveUpdateDestroyView(rest_views.RetrieveUpdateDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
