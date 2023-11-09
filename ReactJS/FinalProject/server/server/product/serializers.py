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
        # fields = '__all__'
        exclude = ('barcode',)

    def create(self, validated_data):
        barcodes_data = validated_data.pop('barcodes', [])
        product = Product.objects.create(**validated_data)

        for barcode_data in barcodes_data:
            # Create Barcode instances related to the product
            barcode = Barcode.objects.create(**barcode_data)

            # Add barcode to the product's many-to-many relationship
            product.barcode.add(barcode)

        return product

    def get_barcodes(self, obj):
        # Return a list of barcode codes for the given Product
        return [barcode.code for barcode in obj.barcodes.all()]
