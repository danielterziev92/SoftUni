from rest_framework import generics as rest_views, serializers

from server.product.models import ProductBaseInformation
from server.product.product_base_info.serializers import ProductListSerializer, ProductSerializer


class ProductValidationMixin:
    def check_all_fields(self):
        serializer = self.get_serializer(data=self.request.data)

        fields_to_check = {
            'name': serializer.initial_data.get('name'),
            'code': serializer.initial_data.get('code'),
            'barcode': serializer.initial_data.get('barcode'),
            'quantity': serializer.initial_data.get('quantity'),
            'price': serializer.initial_data.get('price'),
            'group': serializer.initial_data.get('group'),
        }

        for field in fields_to_check.keys():
            self.check_is_already_exist(field, fields_to_check[field])

    @staticmethod
    def check_is_already_exist(key, value):
        error_messages = {
            'code': f'Продукт с този код: {value} вече съществува.',
            'barcode': f'Продукт с този баркод: {value} вече съществува.',
            'quantity': f'Количеството не може да бъде {value}',
            'price': f'Цената не може да бъде {value}',
            'group': f'Трабва да изберете група',
        }

        if type(value) == str:
            if ProductBaseInformation.objects.filter(**{key: value}).exists():
                error_message = {'message': error_messages[key]}
                raise serializers.ValidationError(error_message)

        if type(value) == int:
            if value == 0:
                error_message = {'message': error_messages[key]}
                raise serializers.ValidationError(error_message)

        if not value:
            error_message = {'message': 'Всички полета са задължителни'}
            raise serializers.ValidationError(error_message)


class ProductListView(rest_views.ListAPIView):
    queryset = ProductBaseInformation.objects.all()
    serializer_class = ProductListSerializer


class ProductDetailView(ProductValidationMixin, rest_views.RetrieveUpdateDestroyAPIView):
    queryset = ProductBaseInformation.objects.all()
    serializer_class = ProductSerializer

    def put(self, request, *args, **kwargs):
        self.check_all_fields()
        return super().put(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        self.check_all_fields()
        return super().patch(request, *args, **kwargs)


class ProductCreateView(ProductValidationMixin, rest_views.CreateAPIView):
    queryset = ProductBaseInformation.objects.all()
    serializer_class = ProductSerializer

    def create(self, request, *args, **kwargs):
        self.check_all_fields()
        return super().create(request, *args, **kwargs)
