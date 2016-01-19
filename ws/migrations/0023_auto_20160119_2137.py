# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('ws', '0022_remove_geo_object_gallery_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='locality',
            field=models.ForeignKey(to='ws.Locality', null=True),
        ),
        migrations.AlterField(
            model_name='address',
            name='street',
            field=models.CharField(max_length=45, verbose_name=b'\xd0\xa3\xd0\xbb\xd0\xb8\xd1\x86\xd0\xb0'),
        ),
        migrations.AlterField(
            model_name='country',
            name='title',
            field=models.CharField(unique=True, max_length=30, verbose_name=b'\xd0\xa1\xd1\x82\xd1\x80\xd0\xb0\xd0\xbd\xd0\xb0'),
        ),
        migrations.AlterField(
            model_name='district',
            name='region',
            field=models.ForeignKey(to='ws.Region', null=True),
        ),
        migrations.AlterField(
            model_name='district',
            name='title',
            field=models.CharField(max_length=45, verbose_name=b'\xd0\xa0\xd0\xb0\xd0\xb9\xd0\xbe\xd0\xbd'),
        ),
        migrations.AlterField(
            model_name='geo_object',
            name='disclamer',
            field=models.CharField(max_length=1000, verbose_name=b'\xd0\x9a\xd1\x80\xd0\xb0\xd1\x82\xd0\xba\xd0\xbe\xd0\xb5 \xd0\xbe\xd0\xbf\xd0\xb8\xd1\x81\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5'),
        ),
        migrations.AlterField(
            model_name='geo_object',
            name='face_link',
            field=models.ImageField(upload_to=b'ws/face/%Y/%m/%d', max_length=255, verbose_name=b'\xd0\xa2\xd0\xb8\xd1\x82\xd1\x83\xd0\xbb\xd1\x8c\xd0\xbd\xd0\xbe\xd0\xb5 \xd0\xb8\xd0\xb7\xd0\xbe\xd0\xb1\xd1\x80\xd0\xb0\xd0\xb6\xd0\xb5\xd0\xbd\xd0\xb8\xd0\xb5', blank=True),
        ),
        migrations.AlterField(
            model_name='geo_object',
            name='latitude',
            field=models.FloatField(verbose_name=b'\xd0\xa8\xd0\xb8\xd1\x80\xd0\xbe\xd1\x82\xd0\xb0', blank=True),
        ),
        migrations.AlterField(
            model_name='geo_object',
            name='longitude',
            field=models.FloatField(verbose_name=b'\xd0\x94\xd0\xbe\xd0\xbb\xd0\xb3\xd0\xbe\xd1\x82\xd0\xb0', blank=True),
        ),
        migrations.AlterField(
            model_name='geo_object',
            name='title',
            field=models.CharField(help_text=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5', max_length=255, verbose_name=b'\xd0\x97\xd0\xb0\xd0\xb3\xd0\xbe\xd0\xbb\xd0\xbe\xd0\xb2\xd0\xbe\xd0\xba'),
        ),
        migrations.AlterField(
            model_name='locality',
            name='district',
            field=models.ForeignKey(to='ws.District', null=True),
        ),
        migrations.AlterField(
            model_name='locality',
            name='title',
            field=models.CharField(max_length=45, verbose_name=b'\xd0\x9d\xd0\xb0\xd1\x81\xd0\xb5\xd0\xbb\xd0\xb5\xd0\xbd\xd0\xbd\xd1\x8b\xd0\xb9 \xd0\xbf\xd1\x83\xd0\xbd\xd0\xba\xd1\x82'),
        ),
        migrations.AlterField(
            model_name='mem_event',
            name='title',
            field=models.CharField(max_length=45, verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5'),
        ),
        migrations.AlterField(
            model_name='object',
            name='adding_date',
            field=models.DateField(auto_now_add=True, verbose_name=b'\xd0\x94\xd0\xb0\xd1\x82\xd0\xb0 \xd0\xb4\xd0\xbe\xd0\xb1\xd0\xb0\xd0\xb2\xd0\xbb\xd0\xb5\xd0\xbd\xd0\xb8\xd1\x8f'),
        ),
        migrations.AlterField(
            model_name='object',
            name='address',
            field=models.ForeignKey(verbose_name=b'\xd0\x90\xd0\xb4\xd1\x80\xd0\xb5\xd1\x81', to='ws.Address', null=True),
        ),
        migrations.AlterField(
            model_name='object',
            name='category_id',
            field=models.ForeignKey(verbose_name=b'\xd0\x9a\xd0\xb0\xd1\x82\xd0\xb5\xd0\xb3\xd0\xbe\xd1\x80\xd0\xb8\xd1\x8f', to='ws.Util_category', null=True),
        ),
        migrations.AlterField(
            model_name='object',
            name='description',
            field=models.TextField(verbose_name=b'\xd0\x9e\xd0\xbf\xd0\xb8\xd1\x81\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5', blank=True),
        ),
        migrations.AlterField(
            model_name='object',
            name='mem_event',
            field=models.ForeignKey(verbose_name=b'\xd0\x9f\xd0\xb0\xd0\xbc\xd1\x8f\xd1\x82\xd0\xbd\xd0\xbe\xd0\xb5 \xd1\x81\xd0\xbe\xd0\xb1\xd1\x8b\xd1\x82\xd0\xb8\xd0\xb5', to='ws.Mem_event', null=True),
        ),
        migrations.AlterField(
            model_name='object',
            name='state_id',
            field=models.ForeignKey(verbose_name=b'\xd0\xa1\xd0\xbe\xd1\x81\xd1\x82\xd0\xbe\xd1\x8f\xd0\xbd\xd0\xb8\xd0\xb5', to='ws.Util_state', null=True),
        ),
        migrations.AlterField(
            model_name='object',
            name='title',
            field=models.CharField(max_length=255, verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5'),
        ),
        migrations.AlterField(
            model_name='object',
            name='user',
            field=models.ForeignKey(null=True, verbose_name=b'\xd0\x9f\xd0\xbe\xd0\xbb\xd1\x8c\xd0\xb7\xd0\xbe\xd0\xb2\xd0\xb0\xd1\x82\xd0\xb5\xd0\xbb\xd1\x8c', to=settings.AUTH_USER_MODEL, db_index=False),
        ),
        migrations.AlterField(
            model_name='region',
            name='country',
            field=models.ForeignKey(to='ws.Country', null=True),
        ),
        migrations.AlterField(
            model_name='region',
            name='title',
            field=models.CharField(unique=True, max_length=45, verbose_name=b'\xd0\xa0\xd0\xb5\xd0\xb3\xd0\xb8\xd0\xbe\xd0\xbd (\xd0\xbe\xd0\xb1\xd0\xbb\xd0\xb0\xd1\x81\xd1\x82\xd1\x8c)'),
        ),
        migrations.AlterField(
            model_name='util_category',
            name='name',
            field=models.CharField(max_length=25, verbose_name=b'\xd0\x9a\xd0\xb0\xd1\x82\xd0\xb5\xd0\xb3\xd0\xbe\xd1\x80\xd0\xb8\xd1\x8f'),
        ),
        migrations.AlterField(
            model_name='util_state',
            name='name',
            field=models.CharField(max_length=25, verbose_name=b'\xd0\xa1\xd0\xbe\xd1\x81\xd1\x82\xd0\xbe\xd1\x8f\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xbe\xd0\xb1\xd1\x8a\xd0\xb5\xd0\xba\xd1\x82\xd0\xb0'),
        ),
        migrations.AlterUniqueTogether(
            name='district',
            unique_together=set([('title', 'region')]),
        ),
        migrations.AlterUniqueTogether(
            name='geo_object',
            unique_together=set([('latitude', 'longitude')]),
        ),
        migrations.AlterUniqueTogether(
            name='locality',
            unique_together=set([('title', 'district')]),
        ),
        migrations.AlterUniqueTogether(
            name='region',
            unique_together=set([('title', 'country')]),
        ),
    ]
