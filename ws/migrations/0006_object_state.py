# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws', '0005_auto_20151202_0903'),
    ]

    operations = [
        migrations.AddField(
            model_name='object',
            name='state',
            field=models.ForeignKey(default=0, to='ws.Util_state'),
            preserve_default=False,
        ),
    ]
