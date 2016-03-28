# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws_app', '0008_auto_20151202_0948'),
    ]

    operations = [
        migrations.AlterField(
            model_name='country',
            name='id',
            field=models.IntegerField(serialize=False, primary_key=True),
        ),
    ]
