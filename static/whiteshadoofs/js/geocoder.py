#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json
import urllib
import sys


url = u"https://geocode-maps.yandex.ru/1.x/?format=json&geocode="
addr = sys.argv[1]
addr = addr.decode('utf-8')

addr = addr.split(u',')

for i in addr:
    i = i.strip()
url = u''
for i in addr:
    url += i
    url += u',+'
url = url.rstrip(u',+')
url = url.replace(u' ', u'+')
doc = urllib.urlopen(url.encode('utf-8'))
pos = json.load(doc)
coords = pos['response']['GeoObjectCollection']['featureMember'][0]['GeoObject']['Point']['pos']
coords = coords.split(' ', 1)
print(coords)