#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.contrib import auth
from django.http import HttpRequest
from django.db import models

import json
import urllib


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

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        try:
            self.validate_unique()
            super(Country, self).save()
        except ValidationError:
            pass


class Region(models.Model):
    """Соответствует таблице region, региону, в кот. находится объект"""
    title = models.CharField(verbose_name='Регион (область)', max_length=45, blank=False, unique=True)
    country = models.ForeignKey(Country, null=True)

    def __unicode__(self):
        return u"{0}, {1}".format(self.title, self.country)

    class Meta:
        unique_together = (
            ('title', 'country'),
        )


class District(models.Model):

    title = models.CharField(verbose_name='Район', max_length=45, blank=False)
    region = models.ForeignKey(Region, null=True)

    def __unicode__(self):
        return u"{0}".format(self.title)

    class Meta:
        unique_together = (
            ('title', 'region'),
        )


class Locality(models.Model):
    """Соответствует таблице Locality, насел. пункту, в кот. находится объект"""
    title = models.CharField(verbose_name='Населенный пункт', max_length=45, blank=False)
    district = models.ForeignKey(District, null=True)

    def __unicode__(self):
        return u"{0}".format(self.title)

    class Meta:
        unique_together = (
            ('title', 'district'),
        )


class Address(models.Model):
    """Соответствует таблице address, полному адресу объекта"""
    street = models.CharField(verbose_name='Улица, дом', max_length=45, blank=False)
    locality = models.ForeignKey(Locality, verbose_name='Населенный пункт', null=True)
    latitude = models.FloatField(verbose_name='Широта', blank=True, null=True)
    longitude = models.FloatField(verbose_name='Долгота', blank=True, null=True)

    class Meta:
        unique_together = (
            ('latitude', 'longitude'),
        )

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
    user = models.ForeignKey(User, db_index=False, verbose_name='Пользователь', null=True, blank=False)
    mem_event = models.ForeignKey(Mem_event, verbose_name='Памятное событие', null=True, blank=False)
    address = models.ForeignKey(Address, verbose_name='Адрес', null=True, blank=False)
    face_link = models.ImageField(upload_to='ws/face/%Y/%m/%d',
                                  blank=True, verbose_name='Титульное изображение', max_length=255)

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):

        super(Object, self).save(force_insert=False, force_update=False,
                                 using=None, update_fields=None)

    @staticmethod
    def fetch(bbox):
        objects = Object.objects.filter(address__latitude__range=(bbox[0], bbox[2]),
                                        address__longitude__range=(bbox[1], bbox[3]))
        return objects

    def __unicode__(self):
        return self.title


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
