# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws', '0017_auto_20151206_1655'),
    ]

    operations = [
        migrations.AlterField(
            model_name='geo_object',
            name='face_link',
            field=models.ImageField(upload_to=b'ws/%Y/%m/%d', max_length=255, verbose_name=b'image', blank=True),
        ),
    ]
