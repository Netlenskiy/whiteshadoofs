# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws_app', '0024_auto_20160310_1406'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='locality',
            field=models.ForeignKey(verbose_name=b'\xd0\x9d\xd0\xb0\xd1\x81\xd0\xb5\xd0\xbb\xd0\xb5\xd0\xbd\xd0\xbd\xd1\x8b\xd0\xb9 \xd0\xbf\xd1\x83\xd0\xbd\xd0\xba\xd1\x82', to='ws.Locality', null=True),
        ),
        migrations.AlterField(
            model_name='address',
            name='street',
            field=models.CharField(max_length=45, verbose_name=b'\xd0\xa3\xd0\xbb\xd0\xb8\xd1\x86\xd0\xb0, \xd0\xb4\xd0\xbe\xd0\xbc'),
        ),
    ]
