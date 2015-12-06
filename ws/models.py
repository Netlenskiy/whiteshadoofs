#!/usr/bin/env python
# -*-coding:utf-8-*-
"""Models for db 'ws' """

"""

"""

from django.db import models


class Util_category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25,)

    def __unicode__(self):
        return self.name


class Util_state(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25,)

    def __unicode__(self):
        return self.name


class Role(models.Model):
    """Соответствует таблице role"""
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=45,)

    def __unicode__(self):
        return self.title


class User(models.Model):
    """Соответствует таблице user, зарегистр-му пользователю сервиса"""
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45,)
    soc_network = models.CharField(max_length=45, blank=True,)
    soc_network_id = models.CharField(max_length=45, blank=True,)
    nick = models.CharField(max_length=45, blank=True,)
    role = models.ForeignKey(Role,)
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
    id = models.AutoField(primary_key=True,)
    title = models.CharField(max_length=30,)

    def __unicode__(self):
        return self.title


class Region(models.Model):
    """Соответствует таблице region, региону, в кот. находится объект"""
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=45,)
    country = models.ForeignKey(Country)

    def __unicode__(self):
        return u"{0}, {1}".format( self.title, self.country )


class Locality(models.Model):
    """Соответствует таблице Locality, насел. пункту, в кот. находится объект"""
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=45,)
    region = models.ForeignKey(Region)

    def __unicode__(self):
        return u"{0}, {1}".format( self.title, self.region )


class Address(models.Model):
    """Соответствует таблице address, полному адресу объекта"""
    id = models.AutoField(primary_key=True)
    street = models.CharField(max_length=45,)
    locality = models.ForeignKey(Locality)

    def __unicode__(self):
        return u"{0}, {1}".format( self.street, self.locality )


class Mem_event(models.Model):
    """Соответствует таблице mem_event, ист. событию, связанному с объектом"""
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=45,)
    description = models.TextField(blank=True,)

    def __unicode__(self):
        return self.title


class Object(models.Model):
    id = models.AutoField(primary_key=True)
    state_id = models.ForeignKey(Util_state,)
    title = models.CharField(max_length=255,)
    category_id = models.ForeignKey(Util_category,)
    adding_date = models.DateField(auto_now_add=True,)
    description = models.TextField(blank=True,)
    user = models.ForeignKey(User, db_index=False)
    mem_event = models.ForeignKey(Mem_event,)
    address = models.ForeignKey(Address,)

    def __unicode__(self):
        return self.title


class Geo_object(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255,)
    disclamer = models.CharField(max_length=1000,)
    latitude = models.FloatField()
    longitude = models.FloatField()
    face_link = models.URLField(max_length=255,)
    gallery_link = models.URLField(max_length=255,)
    object = models.ForeignKey(Object)

    @staticmethod
    def fetch(bbox):
        geo_objects = Geo_object.objects.filter(latitude__range=(bbox[0], bbox[2]),
                                                longitude__range=(bbox[1], bbox[3]))
        return geo_objects

    def __unicode__(self):
        return self.title


class Arangement(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=45,)
    description = models.TextField()
    creation_date = models.DateTimeField()
    begining_date = models.DateTimeField()
    ending_date = models.DateTimeField()
    user = models.ForeignKey(User)
    object = models.ForeignKey(Object)

    def __unicode__(self):
        return self.title



