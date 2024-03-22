# Generated by Django 4.2.4 on 2024-03-22 12:44

from django.db import migrations


def add_unique_brands(apps, schema_editor):
    ShoeModel = apps.get_model("main_app", "Shoe")
    UniqueBrandsModel = apps.get_model("main_app", "UniqueBrands")

    unique_brand_names = ShoeModel.objects.values_list('brand', flat=True).distinct()

    unique_brands_instances = [
        UniqueBrandsModel(brand_name=brand_name) for brand_name in unique_brand_names
    ]

    UniqueBrandsModel.objects.bulk_create(unique_brands_instances)


def remove_brands(apps, schema_editor):
    UniqueBrandsModel = apps.get_model("main_app", "UniqueBrands")
    UniqueBrandsModel.objects.all().delete()


class Migration(migrations.Migration):
    dependencies = [
        ('main_app', '0002_uniquebrands'),
    ]

    operations = [
        migrations.RunPython(add_unique_brands, remove_brands)
    ]
