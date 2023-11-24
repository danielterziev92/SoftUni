from rest_framework import generics as rest_views, serializers

from server.product.models import ProductBaseInformation
from server.product.product_base_info.serializers import ProductListSerializer, ProductSerializer


class ProductValidationMixin:
    def check_all_fields(self):
        serializer = self.get_serializer(data=self.request.data)

        fields_to_check = {key: serializer.initial_data.get(key) for key in serializer.initial_data.keys()}

        if fields_to_check.get('name') == '':
            self.raise_error_message('Името не може да бъде празно')

        for field in ['code', 'barcode']:
            value = fields_to_check[field]
            error_messages = {
                'code': f'Продукт с този код: {value} вече съществува.',
                'barcode': f'Продукт с този баркод: {value} вече съществува.',
            }
            if fields_to_check.get('id'):
                self.check_is_already_exist(field, fields_to_check[field], error_messages[field],
                                            fields_to_check.get('id'))
            else:
                self.check_is_already_exist(field, fields_to_check[field], error_messages[field])

        for field in ['price', 'quantity', 'group']:
            value = fields_to_check[field]
            error_messages = {
                'quantity': f'Количеството не може да бъде {value}',
                'price': f'Цената не може да бъде {value}',
                'group': f'Трабва да изберете група',
            }

            self.check_is_value_zero(value, error_messages[field])

    def check_is_value_zero(self, value, error_message):
        if value == 0:
            self.raise_error_message(error_message)

    def check_is_already_exist(self, key, value, error_message, pk=None):
        if pk:
            queryset = ProductBaseInformation.objects.exclude(pk=pk)
        else:
            queryset = ProductBaseInformation.objects.all()

        if queryset.filter(**{key: value}).exists():
            self.raise_error_message(error_message)

    @staticmethod
    def raise_error_message(message):
        raise serializers.ValidationError({'message': message})


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
