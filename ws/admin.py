#!/usr/bin/env python
# -*-coding:utf-8-*-

"""Classes for administrator's interface"""

from django.contrib import admin
from ws.models import *


class Geo_objectInline(admin.StackedInline):
    model = Geo_object
    exclude = ('id',)
    extra = 1
    max_num = 1


class ObjectAdmin(admin.ModelAdmin):
    exclude = ('id',)
    inlines = [
        Geo_objectInline,
    ]


class AddressAdmin(admin.ModelAdmin):
    exclude = ('id',)


class LocalityAdmin(admin.ModelAdmin):
    exclude = ('id',)


class RegionAdmin(admin.ModelAdmin):
    exclude = ('id',)


class CountryAdmin(admin.ModelAdmin):
    exclude = ('id',)


class UserAdmin(admin.ModelAdmin):
    exclude = ('id',)


# class RoleAdmin(admin.ModelAdmin):
#     exclude = ('id',)


class Mem_eventAdmin(admin.ModelAdmin):
    exclude = ('id',)


class Geo_objectAdmin(admin.ModelAdmin):
    exclude = ('id', )  # 'latitude', 'longitude')


class ArangementAdmin(admin.ModelAdmin):
    exclude = ('id',)


admin.site.register(Country, CountryAdmin)
admin.site.register(Region, RegionAdmin)
admin.site.register(District)
admin.site.register(Locality, LocalityAdmin)
admin.site.register(Address, AddressAdmin)
admin.site.register(Mem_event, Mem_eventAdmin)
admin.site.register(Object, ObjectAdmin)
# admin.site.register(Geo_object, Geo_objectAdmin)
admin.site.register(Arangement, ArangementAdmin)
# admin.site.register(Util_category)
# admin.site.register(Util_state)
