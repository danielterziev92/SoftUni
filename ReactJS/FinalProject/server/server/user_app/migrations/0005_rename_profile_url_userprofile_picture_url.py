# Generated by Django 4.2.7 on 2024-04-16 21:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0004_rename_profile_picture_userprofile_profile_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='profile_url',
            new_name='picture_url',
        ),
    ]
