# Generated by Django 3.1.1 on 2021-05-10 04:30

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0002_auto_20210510_0029'),
    ]

    operations = [
        migrations.AddField(
            model_name='form',
            name='help_with',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100), blank=True, default=list, size=None),
        ),
    ]
