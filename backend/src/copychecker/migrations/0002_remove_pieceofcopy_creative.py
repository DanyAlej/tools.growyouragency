# Generated by Django 3.0.5 on 2020-05-12 01:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('copychecker', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pieceofcopy',
            name='creative',
        ),
    ]