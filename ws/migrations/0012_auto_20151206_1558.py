# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws', '0011_auto_20151202_1003'),
    ]

    operations = [
        migrations.CreateModel(
            name='District',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=45)),
                ('region', models.ForeignKey(default=1, to='ws.Region')),
            ],
        ),
        migrations.RemoveField(
            model_name='locality',
            name='region',
        ),
        migrations.AddField(
            model_name='locality',
            name='district',
            field=models.ForeignKey(default=1, to='ws.District'),
            preserve_default=False,
        ),
    ]
