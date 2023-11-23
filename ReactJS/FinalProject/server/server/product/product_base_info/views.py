from rest_framework import generics as rest_views, serializers

from server.product.models import ProductBaseInformation
from server.product.product_base_info.serializers import ProductListSerializer, ProductSerializer


class ProductListView(rest_views.ListAPIView):
    queryset = ProductBaseInformation.objects.all()
    serializer_class = ProductListSerializer


class ProductDetailView(rest_views.RetrieveUpdateDestroyAPIView):
    queryset = ProductBaseInformation.objects.all()
    serializer_class = ProductSerializer


class ProductCreateView(rest_views.CreateAPIView):
    queryset = ProductBaseInformation.objects.all()
    serializer_class = ProductSerializer

    def create(self, request, *args, **kwargs):
        self.check_is_already_exist()

        return super().create(request, *args, **kwargs)

    def check_is_already_exist(self):
        message_field_type = {
            'code': 'код',
            'barcode': 'баркод',
        }

        serializer = self.get_serializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)

        for field in message_field_type.keys():
            value = serializer.validated_data.get(field)
            if ProductBaseInformation.objects.filter(**{field: value}).exists():
                error_message = {'message': f'Продукт с {message_field_type[field]}: {value} вече съществува.'}
                raise serializers.ValidationError(error_message)
