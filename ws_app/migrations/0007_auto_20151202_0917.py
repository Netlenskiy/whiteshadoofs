# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws_app', '0006_object_state'),
    ]

    operations = [
        migrations.RenameField(
            model_name='object',
            old_name='category',
            new_name='category_id',
        ),
        migrations.RenameField(
            model_name='object',
            old_name='state',
            new_name='state_id',
        ),
    ]
