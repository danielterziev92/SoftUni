# Generated by Django 4.2.2 on 2023-06-18 20:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_create_plant'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_picture',
            field=models.ImageField(blank=True, null=True, upload_to='profiles'),
        ),
    ]
