from rest_framework import serializers

from server.product.models import Barcode, Group, Product


class BarcodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Barcode
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    barcodes = BarcodeSerializer(many=True, required=False, source='barcode')

    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        barcodes_data = validated_data.pop('barcode', [])
        product = Product.objects.create(**validated_data)

        for barcode_data in barcodes_data:
            # Create Barcode instances related to the product
            barcode = Barcode.objects.create(**barcode_data)

            # Add barcode to the product's many-to-many relationship using set
            product.barcode.add(barcode)

        return product

    def get_barcodes(self, obj):
        # Return a list of barcode codes for the given Product
        return [barcode.code for barcode in obj.barcode.all()]

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        # Check if it's a GET request to determine the fields to include/exclude
        if self.context['request'].method == 'GET':
            return {
                'id': representation['id'],
                'code': representation['code'],
                'name': representation['name'],
                'price': representation['price'],
                'is_active': representation['is_active'],
                'group': representation['group'],
                'barcodes': self.get_barcodes(instance),
            }
        else:
            # Exclude the 'barcodes' field for non-GET requests
            del representation['barcode']
            return representation
