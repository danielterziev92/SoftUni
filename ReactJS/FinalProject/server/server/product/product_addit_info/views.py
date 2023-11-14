from rest_framework import generics as rest_views, views as api_view, status
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response

from server.product.models import ProductAdditionalInfo, MoreBarcodes
from server.product.product_addit_info.serializers import ProductInfoSerializer, MoreBarcodesSerializer


class ProductInfoDetailView(rest_views.RetrieveUpdateDestroyAPIView):
    queryset = ProductAdditionalInfo.objects.all()
    serializer_class = ProductInfoSerializer
    lookup_url_kwarg = 'pk'


class ProductInfoCreateView(rest_views.CreateAPIView):
    queryset = ProductAdditionalInfo.objects.all()
    serializer_class = ProductInfoSerializer


class ProductInfoUploadView(api_view.APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        serializer = ProductInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MoreBarcodesDetailView(rest_views.RetrieveUpdateDestroyAPIView):
    queryset = MoreBarcodes.objects.all()
    serializer_class = MoreBarcodesSerializer
    lookup_url_kwarg = 'pk'


class MoreBarcodesCreateView(rest_views.CreateAPIView):
    queryset = MoreBarcodes.objects.all()
    serializer_class = MoreBarcodesSerializer
