# Generated by Django 3.2.13 on 2023-04-16 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_authentication', '0002_activesession_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activesession',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]