# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws', '0023_auto_20160119_2137'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='geo_object',
            unique_together=set([('latitude', 'longitude')]),
        ),
        migrations.RemoveField(
            model_name='geo_object',
            name='object',
        ),
        migrations.AddField(
            model_name='address',
            name='latitude',
            field=models.FloatField(null=True, verbose_name=b'\xd0\xa8\xd0\xb8\xd1\x80\xd0\xbe\xd1\x82\xd0\xb0', blank=True),
        ),
        migrations.AddField(
            model_name='address',
            name='longitude',
            field=models.FloatField(null=True, verbose_name=b'\xd0\x94\xd0\xbe\xd0\xbb\xd0\xb3\xd0\xbe\xd1\x82\xd0\xb0', blank=True),
        ),
        migrations.AddField(
            model_name='object',
            name='face_link',
            field=models.ImageField(upload_to=b'ws/face/%Y/%m/%d', max_length=255, verbose_name=b'\xd0\xa2\xd0\xb8\xd1\x82\xd1\x83\xd0\xbb\xd1\x8c\xd0\xbd\xd0\xbe\xd0\xb5 \xd0\xb8\xd0\xb7\xd0\xbe\xd0\xb1\xd1\x80\xd0\xb0\xd0\xb6\xd0\xb5\xd0\xbd\xd0\xb8\xd0\xb5', blank=True),
        ),
        migrations.AlterUniqueTogether(
            name='address',
            unique_together=set([('latitude', 'longitude')]),
        ),
        migrations.DeleteModel(
            name='Geo_object',
        ),
    ]
