# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws', '0013_auto_20151206_1601'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='locality',
            field=models.ForeignKey(default=None, to='ws.Locality'),
        ),
        migrations.AlterField(
            model_name='arangement',
            name='object',
            field=models.ForeignKey(default=None, to='ws.Object'),
        ),
        migrations.AlterField(
            model_name='arangement',
            name='user',
            field=models.ForeignKey(default=None, to='ws.User'),
        ),
        migrations.AlterField(
            model_name='district',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='district',
            name='region',
            field=models.ForeignKey(default=None, to='ws.Region'),
        ),
        migrations.AlterField(
            model_name='geo_object',
            name='object',
            field=models.ForeignKey(default=None, to='ws.Object'),
        ),
        migrations.AlterField(
            model_name='locality',
            name='district',
            field=models.ForeignKey(default=None, to='ws.District'),
        ),
        migrations.AlterField(
            model_name='object',
            name='address',
            field=models.ForeignKey(default=None, to='ws.Address'),
        ),
        migrations.AlterField(
            model_name='object',
            name='category_id',
            field=models.ForeignKey(default=None, to='ws.Util_category'),
        ),
        migrations.AlterField(
            model_name='object',
            name='mem_event',
            field=models.ForeignKey(default=None, to='ws.Mem_event'),
        ),
        migrations.AlterField(
            model_name='object',
            name='state_id',
            field=models.ForeignKey(default=None, to='ws.Util_state'),
        ),
        migrations.AlterField(
            model_name='object',
            name='user',
            field=models.ForeignKey(default=None, to='ws.User', db_index=False),
        ),
        migrations.AlterField(
            model_name='region',
            name='country',
            field=models.ForeignKey(default=None, to='ws.Country'),
        ),
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.ForeignKey(default=None, to='ws.Role'),
        ),
    ]
