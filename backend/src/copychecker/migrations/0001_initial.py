# Generated by Django 3.0.5 on 2020-05-03 13:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PieceOfCopy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('headline', models.CharField(blank=True, max_length=120)),
                ('body', models.TextField()),
                ('approved', models.BooleanField(default=True)),
                ('description', models.CharField(blank=True, max_length=240)),
                ('creative', models.ImageField(blank=True, upload_to=None)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]