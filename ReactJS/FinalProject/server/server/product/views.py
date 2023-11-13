# from rest_framework import generics as rest_views, views as api_views
# from rest_framework.permissions import AllowAny
#
# from server.product.models import Group, Product
# from server.product.serializers import GroupSerializer, ProductSerializer
#
#
# class GroupListCreateView(rest_views.ListCreateAPIView):
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer
#
#
# class GroupRetrieveUpdateDestroyView(rest_views.RetrieveUpdateDestroyAPIView):
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer
#
#
# class ProductListView(rest_views.ListCreateAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#
#
# class ProductDetailView(rest_views.RetrieveUpdateDestroyAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
