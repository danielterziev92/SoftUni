# Generated by Django 4.2.7 on 2024-03-26 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_create_default_group'),
    ]

    operations = [
        migrations.CreateModel(
            name='Unit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=15)),
            ],
        ),
    ]
