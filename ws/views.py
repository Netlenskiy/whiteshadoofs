#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.shortcuts import render, render_to_response
import ws.models as models


def main(request):
    if request.method == 'GET' and request.META['QUERY_STRING']:
        return HttpResponse(request.META['QUERY_STRING'])
    else:
        return render_to_response('index.html')


def objects_search(request):
    """Функция осуществляет поиск соответствующих get-запросу
    объектов в бд, передает их шаблону в качестве контекста. 
    
    """
    nothing_found = "Ничего не нашлось..."
    empty_title = 'Поле "Название" является обязательным.'

    if not request.GET['title']:
        return HttpResponse(empty_title)

    in_desc = True if request.GET['in_desc'] == 'true' else False

    if request.GET['country']:
        in_country = models.Object.objects.filter(
            address__locality__region__country__title__icontains=request.GET['country']
        )
    else:
        in_country = models.Object.objects.all()

    if request.GET['region']:
        in_region = in_country.filter(
            address__locality__region__title__icontains=request.GET['region']
        )
    else:
        in_region = in_country

    if request.GET['city']:
        in_locality = in_region.filter(
            address__locality__title__icontains=request.GET['locality']
        )
    else:
        in_locality = in_region

    if request.GET['street']:
        in_street = in_locality.filter(
            address__street__icontains=request.GET['street']
        )
    else:
        in_street = in_locality

    result = in_street.filter(title__icontains=request.GET['title'])
    result = list(result)
    if in_desc:
        result += in_street.filter(description__icontains=request.GET['title'])

    if not result:
        return HttpResponse(nothing_found)
    return render_to_response('search_result.html', {'result': result})
    

def fetch_placemarks(request):
    callback = request.GET['callback']
    bbox = request.GET['bbox']
    return render(request, 'pms.json', {'func': callback, })













