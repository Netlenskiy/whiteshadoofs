# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('street', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Arangement',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=45)),
                ('description', models.TextField()),
                ('creation_date', models.DateTimeField()),
                ('begining_date', models.DateTimeField()),
                ('ending_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Geo_object',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=255)),
                ('disclamer', models.CharField(max_length=1000)),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('face_link', models.URLField(max_length=255)),
                ('gallery_link', models.URLField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
            ],
        ),
        migrations.CreateModel(
            name='Locality',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Mem_event',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=45)),
                ('description', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Object',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('state', models.CommaSeparatedIntegerField(max_length=5)),
                ('title', models.CharField(max_length=255)),
                ('category', models.CommaSeparatedIntegerField(max_length=10)),
                ('adding_date', models.DateField(auto_now_add=True)),
                ('description', models.TextField(blank=True)),
                ('address', models.ForeignKey(to='ws.Address')),
                ('mem_event', models.ForeignKey(to='ws.Mem_event')),
            ],
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=45)),
                ('country', models.ForeignKey(to='ws.Country')),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=45)),
                ('soc_network', models.CharField(max_length=45, blank=True)),
                ('soc_network_id', models.CharField(max_length=45, blank=True)),
                ('nick', models.CharField(max_length=45, blank=True)),
                ('password', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('role', models.ForeignKey(to='ws.Role')),
            ],
        ),
        migrations.AddField(
            model_name='object',
            name='user',
            field=models.ForeignKey(to='ws.User', db_index=False),
        ),
        migrations.AddField(
            model_name='locality',
            name='region',
            field=models.ForeignKey(to='ws.Region'),
        ),
        migrations.AddField(
            model_name='geo_object',
            name='object',
            field=models.ForeignKey(to='ws.Object'),
        ),
        migrations.AddField(
            model_name='arangement',
            name='object',
            field=models.ForeignKey(to='ws.Object'),
        ),
        migrations.AddField(
            model_name='arangement',
            name='user',
            field=models.ForeignKey(to='ws.User'),
        ),
        migrations.AddField(
            model_name='address',
            name='locality',
            field=models.ForeignKey(to='ws.Locality'),
        ),
    ]
