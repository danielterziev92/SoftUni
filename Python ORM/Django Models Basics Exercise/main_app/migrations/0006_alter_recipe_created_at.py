# Generated by Django 4.2.4 on 2024-03-20 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0005_alter_recipe_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='created_at',
            field=models.DateField(auto_now=True),
        ),
    ]
