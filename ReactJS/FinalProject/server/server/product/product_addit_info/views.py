from rest_framework import generics as rest_views

from server.product.models import ProductAdditionalInfo
from server.product.product_addit_info.serializers import ProductInfoDetailSerializer, ProductInfoCreateSerializer


class ProductInfoDetailView(rest_views.RetrieveUpdateDestroyAPIView):
    queryset = ProductAdditionalInfo.objects.all()
    serializer_class = ProductInfoDetailSerializer
    lookup_url_kwarg = 'pk'


class ProductInfoCreateView(rest_views.CreateAPIView):
    queryset = ProductAdditionalInfo.objects.all()
    serializer_class = ProductInfoCreateSerializer
