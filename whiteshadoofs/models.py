#!/usr/bin/env python
#-*-coding:utf-8-*-
"""Models for db 'ws' """

"""

"""
from django.db import models

class Role(models.Model):
    """Соответствует таблице role"""
    title = models.CharField(max_length=45)
    def __unicode__(self):
        return self.title

class User(models.Model):
    """Соответствует таблице user, зарегистр-му пользователю сервиса"""
    name = models.CharField(max_length=45)
    soc_network = models.CharField(max_length=45, blank=True)
    soc_network_id = models.CharField(max_length=45, blank=True)
    nick = models.CharField(max_length=45, blank=True)
    role = models.ForeignKey(Role)
    def __unicode__(self):
        return self.name

class Image(models.Model):
    """TO DO"""
    pass
    def __unicode__(self):
        pass 

class Country(models.Model):
    """Соответствует таблице country, стране, в кот. находится объект"""
    title = models.CharField(max_length=30)
    def __unicode__(self):
        return self.title

class Region(models.Model):
    """Соответствует таблице region, региону, в кот. находится объект"""
    title = models.CharField(max_length=45,)
    country = models.ForeignKey(Country)
    def __unicode__(self):
        return u"{0}, {1}".format( self.title, self.country )

class Locality(models.Model):
    """Соответствует таблице Locality, насел. пункту, в кот. находится объект"""
    title = models.CharField(max_length=45)
    region = models.ForeignKey(Region)
    def __unicode__(self):
        return u"{0}, {1}".format( self.title, self.region )

class Address(models.Model):
    """Соответствует таблице address, полному адресу объекта"""
    street = models.CharField(max_length=45)
    latitude = models.FloatField()
    longitude = models.FloatField()
    locality = models.ForeignKey(Locality)
    def __unicode__(self):
        return u"{0}, {1}".format( self.street, self.locality )

class Mem_event(models.Model):
    """Соответствует таблице mem_event, ист. событию, связанному с объектом"""
    title = models.CharField(max_length=45)
    description = models.TextField(blank=True)
    def __unicode__(self):
        return self.title

class Object(models.Model):
    state = models.CommaSeparatedIntegerField(max_length=5)
    title = models.CharField(max_length=255)
    category = models.CommaSeparatedIntegerField(max_length=10)
    adding_date = models.DateField(auto_now_add=True)
    description = models.TextField(blank=True)
    user = models.ForeignKey(User)
    mem_event = models.ForeignKey(Mem_event)
    address = models.ForeignKey(Address)
    def __unicode__(self):
        return self.title





