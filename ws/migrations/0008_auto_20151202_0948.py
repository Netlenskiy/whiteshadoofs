# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws', '0007_auto_20151202_0917'),
    ]

    operations = [
        migrations.AlterField(
            model_name='country',
            name='id',
            field=models.IntegerField(default=0, serialize=False, primary_key=True),
        ),
    ]
