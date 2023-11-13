from rest_framework import generics as rest_views

from server.product.models import ProductBaseInformation
from server.product.product_info.serializers import ProductListSerializer


class ProductListView(rest_views.ListAPIView):
    queryset = ProductBaseInformation.objects.all()
    serializer_class = ProductListSerializer
