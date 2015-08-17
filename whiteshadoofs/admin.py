#!/usr/bin/env python
#-*-coding:utf-8-*-

"""Classes for administrator's interface"""

from django.contrib import admin
from whiteshadoofs.models import * 



admin.site.register(Role)
admin.site.register(User)
admin.site.register(Country)
admin.site.register(Region)
admin.site.register(Locality)
admin.site.register(Address)
admin.site.register(Mem_event)
admin.site.register(Object)
