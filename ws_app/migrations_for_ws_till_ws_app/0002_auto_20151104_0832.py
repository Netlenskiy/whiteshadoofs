# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='id',
            field=models.PositiveIntegerField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='arangement',
            name='id',
            field=models.PositiveIntegerField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='country',
            name='id',
            field=models.PositiveIntegerField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='geo_object',
            name='id',
            field=models.PositiveIntegerField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='locality',
            name='id',
            field=models.PositiveIntegerField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='mem_event',
            name='id',
            field=models.PositiveIntegerField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='object',
            name='id',
            field=models.PositiveIntegerField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='region',
            name='id',
            field=models.PositiveIntegerField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='role',
            name='id',
            field=models.PositiveIntegerField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.PositiveIntegerField(serialize=False, primary_key=True),
        ),
    ]
