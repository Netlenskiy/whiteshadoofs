# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ws', '0020_auto_20160109_1107'),
    ]

    operations = [
        migrations.CreateModel(
            name='ImageSet',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('gallery_link', models.ImageField(upload_to='ws/gallery/%Y/%m/%d', max_length=255, verbose_name='gallery', blank=True)),
            ],
        ),
        migrations.AddField(
            model_name='geo_object',
            name='gallery_link',
            field=models.ForeignKey(blank=True, to='ws.ImageSet', null=True),
        ),
    ]
