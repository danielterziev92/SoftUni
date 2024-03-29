# Generated by Django 4.2.7 on 2024-03-24 22:05

from django.db import migrations


def create_default_object(apps, schema_editor):
    ObjectModel = apps.get_model('product', 'Object')

    ObjectModel.objects.create(
        name='Служебен обект',
        is_active=True,
    )


class Migration(migrations.Migration):
    dependencies = [
        ('product', '0002_create_object'),
    ]

    operations = [
        migrations.RunPython(create_default_object),
    ]
