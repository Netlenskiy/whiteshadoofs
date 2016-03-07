#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, render_to_response
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
from django.views.generic.edit import FormView
from django.views.generic.base import View
from . import models, forms


class IndexView(View):
    def get(self, request):
        responce = 'index.html'
        return render_to_response(responce, {'user': request.user})


def objects_search(request):
    """
    :param request
    Функция осуществляет поиск соответствующих get-запросу
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
    template = 'ws/ws/templates/ws/search/search_result.html'
    return render_to_response(template, {'result': result})


def fetch_placemarks(request):
    callback = request.GET['callback']
    bbox = request.GET['bbox']
    bbox = bbox.split(',', 3)

    for value in bbox:
        value = float(value)

    geo_objects = list(models.Geo_object.fetch(bbox))
    response = HttpResponse()
    response['cache-control'] = 'no-store'
    response = render(request, 'ws/templates/pms.json', {'func': callback, 'bbox': geo_objects})
    return response


def get_fe_menu(request):
    responce = 'category_list.html'
    return render_to_response(responce)


class GetFEMenuView(View):

    def get(self, request):
        responce = request.GET['name'] + '.html'
        return render_to_response(responce)


class ProfileView(FormView):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated():
            responce = 'profile.html'
            # return HttpResponseRedirect('logout')
        else:
            return HttpResponseRedirect('login')
        return render_to_response(responce, {'user': request.user})


class RegisterFormView(FormView):
    form_class = forms.UserCreationForm
    success_url = '/login'
    template_name = 'register.html'

    def form_valid(self, form):
        form.save()
        return super(RegisterFormView, self).form_valid(form)


class LoginFormView(FormView):
    form_class = AuthenticationForm
    success_url = '/'
    template_name = 'login.html'

    def __init__(self, **kwargs):
        self.user = None
        super(LoginFormView, self).__init__(**kwargs)

    def form_valid(self, form):
        self.user = form.get_user()
        login(self.request, self.user)
        return super(LoginFormView, self).form_valid(form)


class LogoutView(View):

    def get(self, request):
        logout(request)
        return HttpResponseRedirect('/')


class AddObjectFormView(FormView):

    form_class = forms.AddObjectForm
    success_url = '/'
    template_name = 'add_object.html'

    def form_valid(self, form):
        user = self.request.user
        if user.is_authenticated():
            form.save()
            return super(AddObjectFormView, self).form_valid(form)
        else:
            HttpResponseRedirect('/')

