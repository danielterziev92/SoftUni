# Generated by Django 4.2.7 on 2024-03-26 15:33

from django.db import migrations


def create_default_units(apps, schema_editor):
    UnitModel = apps.get_model('product', 'Unit')

    default_units = [
        UnitModel(name='брой'),
        UnitModel(name='килограм'),
        UnitModel(name='литър')
    ]

    UnitModel.objects.bulk_create(default_units)


class Migration(migrations.Migration):
    dependencies = [
        ('product', '0006_create_unit'),
    ]

    operations = [
        migrations.RunPython(create_default_units)
    ]
