# Generated by Django 4.0.2 on 2022-04-20 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='facilitator',
            field=models.CharField(default=' ', max_length=100),
        ),
    ]
