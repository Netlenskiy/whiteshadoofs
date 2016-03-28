# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws_app', '0004_util_category_util_state'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='object',
            name='state',
        ),
        migrations.AlterField(
            model_name='object',
            name='category',
            field=models.ForeignKey(to='ws.Util_category'),
        ),
    ]
