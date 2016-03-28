# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws_app', '0019_auto_20160106_0921'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Image',
        ),
        migrations.RemoveField(
            model_name='geo_object',
            name='gallery_link',
        ),
        migrations.AlterField(
            model_name='geo_object',
            name='face_link',
            field=models.ImageField(upload_to=b'ws_app/face/%Y/%m/%d', max_length=255, verbose_name=b'image', blank=True),
        ),
    ]
