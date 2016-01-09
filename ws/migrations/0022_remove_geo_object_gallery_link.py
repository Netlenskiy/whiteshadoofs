# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws', '0021_auto_20160109_1109'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='geo_object',
            name='gallery_link',
        ),
    ]
