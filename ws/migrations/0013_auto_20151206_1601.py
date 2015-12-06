# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws', '0012_auto_20151206_1558'),
    ]

    operations = [
        migrations.AlterField(
            model_name='district',
            name='id',
            field=models.AutoField(default=1, serialize=False, primary_key=True),
        ),
    ]
