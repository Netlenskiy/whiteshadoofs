#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.db import models
import json
import urllib
import settings
"""Models for db 'ws' """

"""

"""


class Util_category(models.Model):
    name = models.CharField(max_length=25,)

    def __unicode__(self):
        return self.name


class Util_state(models.Model):
    name = models.CharField(max_length=25,)

    def __unicode__(self):
        return self.name


class Role(models.Model):
    """Соответствует таблице role"""
    title = models.CharField(max_length=45,)

    def __unicode__(self):
        return self.title


class User(models.Model):
    """Соответствует таблице user, зарегистр-му пользователю сервиса"""
    name = models.CharField(max_length=45,)
    soc_network = models.CharField(max_length=45, blank=True,)
    soc_network_id = models.CharField(max_length=45, blank=True,)
    nick = models.CharField(max_length=45, blank=True,)
    role = models.ForeignKey(Role, null=True, blank=True)
    password = models.CharField(max_length=50,)
    email = models.EmailField(max_length=254,)

    def __unicode__(self):
        return self.name


class Image(models.Model):
    """TO DO"""
    pass

    def __unicode__(self):
        pass 


class Country(models.Model):
    """Соответствует таблице country, стране, в кот. находится объект"""
    title = models.CharField(max_length=30,)

    def __unicode__(self):
        return self.title


class Region(models.Model):
    """Соответствует таблице region, региону, в кот. находится объект"""
    title = models.CharField(max_length=45,)
    country = models.ForeignKey(Country, null=True, blank=True)

    def __unicode__(self):
        return u"{0}, {1}".format(self.title, self.country)


class District(models.Model):

    title = models.CharField(max_length=45,)
    region = models.ForeignKey(Region, null=True, blank=True)

    def __unicode__(self):
        return u"{0}".format(self.title)


class Locality(models.Model):
    """Соответствует таблице Locality, насел. пункту, в кот. находится объект"""
    title = models.CharField(max_length=45,)
    district = models.ForeignKey(District, null=True, blank=True)

    def __unicode__(self):
        return u"{0}".format(self.title)


class Address(models.Model):
    """Соответствует таблице address, полному адресу объекта"""
    street = models.CharField(max_length=45,)
    locality = models.ForeignKey(Locality, null=True, blank=True)

    def __unicode__(self):
        return u"{0}, {1}".format(self.street, self.locality)


class Mem_event(models.Model):
    """Соответствует таблице mem_event, ист. событию, связанному с объектом"""
    title = models.CharField(max_length=45,)
    description = models.TextField(blank=True,)

    def __unicode__(self):
        return self.title


class Object(models.Model):
    state_id = models.ForeignKey(Util_state, null=True, blank=True)
    title = models.CharField(max_length=255,)
    category_id = models.ForeignKey(Util_category, null=True, blank=True)
    adding_date = models.DateField(auto_now_add=True,)
    description = models.TextField(blank=True,)
    user = models.ForeignKey(User, db_index=False, null=True, blank=True)
    mem_event = models.ForeignKey(Mem_event, null=True, blank=True)
    address = models.ForeignKey(Address, null=True, blank=True)

    def __unicode__(self):
        return self.title


class Geo_object(models.Model):
    title = models.CharField(max_length=255,)
    disclamer = models.CharField(max_length=1000,)
    latitude = models.FloatField()
    longitude = models.FloatField()
    # face_link = models.URLField(max_length=255,)
    face_link = models.ImageField(upload_to='ws/%Y/%m/%d', blank=True, verbose_name='image', max_length=255,)
    gallery_link = models.URLField(max_length=255,)
    object = models.ForeignKey(Object, null=True, blank=True)

    @staticmethod
    def fetch(bbox):
        geo_objects = Geo_object.objects.filter(latitude__range=(bbox[0], bbox[2]),
                                                longitude__range=(bbox[1], bbox[3]))
        return geo_objects

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        try:
            url = u"https://geocode-maps.yandex.ru/1.x/?format=json&geocode="
            addr = self.object.address
            url += addr.locality.district.region.country.title
            url += u',+'
            url += addr.locality.district.region.title
            url += u',+'
            url += addr.locality.district.title
            url += u',+'
            url += addr.locality.title
            url += u',+'
            url += addr.street
            url = url.replace(u' ', u'+')
            doc = urllib.urlopen(url.encode('utf-8'))
            pos = json.load(doc)
            coords = pos['response']['GeoObjectCollection']['featureMember'][0]['GeoObject']['Point']['pos']
            coords = coords.split(' ', 1)
            self.latitude = float(coords[1])
            self.longitude = float(coords[0])
            super(Geo_object, self).save(force_insert=False, force_update=False,
                                         using=None, update_fields=None)
        except Exception as e:
            return False
        return True

    def __unicode__(self):
        return self.title


class Arangement(models.Model):
    title = models.CharField(max_length=45,)
    description = models.TextField()
    creation_date = models.DateTimeField()
    begining_date = models.DateTimeField()
    ending_date = models.DateTimeField()
    user = models.ForeignKey(User, null=True, blank=True)
    object = models.ForeignKey(Object, null=True, blank=True)

    def __unicode__(self):
        return self.title

