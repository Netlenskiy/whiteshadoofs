# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws_app', '0015_auto_20151206_1625'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='address',
            name='locality',
            field=models.ForeignKey(blank=True, to='ws.Locality', null=True),
        ),
        migrations.AlterField(
            model_name='arangement',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='arangement',
            name='object',
            field=models.ForeignKey(blank=True, to='ws.Object', null=True),
        ),
        migrations.AlterField(
            model_name='arangement',
            name='user',
            field=models.ForeignKey(blank=True, to='ws.User', null=True),
        ),
        migrations.AlterField(
            model_name='country',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='district',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='district',
            name='region',
            field=models.ForeignKey(blank=True, to='ws.Region', null=True),
        ),
        migrations.AlterField(
            model_name='geo_object',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='geo_object',
            name='object',
            field=models.ForeignKey(blank=True, to='ws.Object', null=True),
        ),
        migrations.AlterField(
            model_name='locality',
            name='district',
            field=models.ForeignKey(blank=True, to='ws.District', null=True),
        ),
        migrations.AlterField(
            model_name='locality',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='mem_event',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='object',
            name='address',
            field=models.ForeignKey(blank=True, to='ws.Address', null=True),
        ),
        migrations.AlterField(
            model_name='object',
            name='category_id',
            field=models.ForeignKey(blank=True, to='ws.Util_category', null=True),
        ),
        migrations.AlterField(
            model_name='object',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='object',
            name='mem_event',
            field=models.ForeignKey(blank=True, to='ws.Mem_event', null=True),
        ),
        migrations.AlterField(
            model_name='object',
            name='state_id',
            field=models.ForeignKey(blank=True, to='ws.Util_state', null=True),
        ),
        migrations.AlterField(
            model_name='object',
            name='user',
            field=models.ForeignKey(to='ws.User', blank=True, null=True, db_index=False),
        ),
        migrations.AlterField(
            model_name='region',
            name='country',
            field=models.ForeignKey(blank=True, to='ws.Country', null=True),
        ),
        migrations.AlterField(
            model_name='region',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='role',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.ForeignKey(blank=True, to='ws.Role', null=True),
        ),
        migrations.AlterField(
            model_name='util_category',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
        migrations.AlterField(
            model_name='util_state',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
    ]
