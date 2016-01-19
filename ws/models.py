#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.contrib.auth.models import User
from django.db import models
import json
import urllib

"""Models for db 'ws' """

"""

"""


class Util_category(models.Model):
    name = models.CharField(verbose_name='Категория', max_length=25)

    def __unicode__(self):
        return self.name


class Util_state(models.Model):
    name = models.CharField(verbose_name='Состояние объекта', max_length=25)

    def __unicode__(self):
        return self.name


class ImageSet(models.Model):
    """TO DO"""
    gallery_link = models.ImageField(upload_to=u'ws/gallery/%Y/%m/%d',
                                     blank=True, verbose_name=u'gallery', max_length=255)

    def __unicode__(self):
        pass


class Country(models.Model):
    """Соответствует таблице country, стране, в кот. находится объект"""
    title = models.CharField(verbose_name='Страна', max_length=30, blank=False, unique=True)

    def __unicode__(self):
        return self.title


class Region(models.Model):
    """Соответствует таблице region, региону, в кот. находится объект"""
    title = models.CharField(verbose_name='Регион (область)', max_length=45, blank=False, unique=True)
    country = models.ForeignKey(Country, null=True)

    def __unicode__(self):
        return u"{0}, {1}".format(self.title, self.country)

    class Meta:
        unique_together = (('title', 'country'),)


class District(models.Model):

    title = models.CharField(verbose_name='Район', max_length=45, blank=False)
    region = models.ForeignKey(Region, null=True)

    def __unicode__(self):
        return u"{0}".format(self.title)

    class Meta:
        unique_together = (('title', 'region'),)


class Locality(models.Model):
    """Соответствует таблице Locality, насел. пункту, в кот. находится объект"""
    title = models.CharField(verbose_name='Населенный пункт', max_length=45, blank=False)
    district = models.ForeignKey(District, null=True)

    def __unicode__(self):
        return u"{0}".format(self.title)

    class Meta:
        unique_together = (('title', 'district'),)


class Address(models.Model):
    """Соответствует таблице address, полному адресу объекта"""
    street = models.CharField(verbose_name='Улица', max_length=45, blank=False)
    locality = models.ForeignKey(Locality, null=True)

    def __unicode__(self):
        return u"{0}, {1}".format(self.street, self.locality)


class Mem_event(models.Model):
    """Соответствует таблице mem_event, ист. событию, связанному с объектом"""
    title = models.CharField(verbose_name='Название', max_length=45, blank=False)
    description = models.TextField(blank=True)

    def __unicode__(self):
        return self.title


class Object(models.Model):
    state_id = models.ForeignKey(Util_state, null=True, verbose_name='Состояние')
    title = models.CharField(verbose_name='Название', max_length=255, blank=False)
    category_id = models.ForeignKey(Util_category, null=True, verbose_name='Категория')
    adding_date = models.DateField(verbose_name='Дата добавления', auto_now_add=True)
    description = models.TextField(verbose_name='Описание', blank=True)
    # user = models.ForeignKey(User, db_index=False, null=True, blank=True)
    user = models.ForeignKey(User, db_index=False, verbose_name='Пользователь', null=True, blank=False)
    mem_event = models.ForeignKey(Mem_event, verbose_name='Памятное событие', null=True, blank=False)
    address = models.ForeignKey(Address, verbose_name='Адрес', null=True, blank=False)

    def __unicode__(self):
        return self.title


class Geo_object(models.Model):
    title = models.CharField(max_length=255, blank=False, verbose_name='Заголовок', help_text='Название')
    disclamer = models.CharField(max_length=1000, verbose_name='Краткое описание')
    latitude = models.FloatField(verbose_name='Широта', blank=True)
    longitude = models.FloatField(verbose_name='Долгота', blank=True)
    face_link = models.ImageField(upload_to='ws/face/%Y/%m/%d',
                                  blank=True, verbose_name='Титульное изображение', max_length=255)
    object = models.ForeignKey(Object, null=True, blank=True)

    @staticmethod
    def fetch(bbox):
        geo_objects = Geo_object.objects.filter(latitude__range=(bbox[0], bbox[2]),
                                                longitude__range=(bbox[1], bbox[3]))
        return geo_objects

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        try:
            if self.latitude and self.longitude:
                self.latitude = float(self.latitude)
                self.longitude = float(self.longitude)
                super(Geo_object, self).save(force_insert=False, force_update=False,
                                             using=None, update_fields=None)
            else:
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
        except TypeError as e:
            return False
        except Exception as e:
            return False
        return True

    def __unicode__(self):
        return self.title

    class Meta:
        unique_together = (('latitude', 'longitude'),)


class Arangement(models.Model):
    title = models.CharField(max_length=45)
    description = models.TextField()
    creation_date = models.DateTimeField()
    begining_date = models.DateTimeField()
    ending_date = models.DateTimeField()
    user = models.ForeignKey(User, null=True, blank=True)
    object = models.ForeignKey(Object, null=True, blank=True)

    def __unicode__(self):
        return self.title
