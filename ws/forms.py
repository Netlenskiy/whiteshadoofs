#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from django.contrib.auth.models import User
from django.contrib.auth import forms as auth_forms
from django import forms
from . import models


class UserCreationForm(auth_forms.UserCreationForm):

    class Meta:
        model = User
        fields = (
            'email',
            'username',
            'first_name',
            'last_name',
        )


class AddObjectForm(forms.ModelForm):

    class Meta:
        model = models.Object
        exclude = (
            'user',
        )
        localized_fields = '__all__'


class AddMemEventForm(forms.ModelForm):

    class Meta:
        model = models.Mem_event
        fields = (
            'title',
            'description',
        )


class AddRegionForm(forms.ModelForm):

    class Meta:
        model = models.Region
        fields = (
            'title',
            'country',
        )


class AddDistrictForm(forms.ModelForm):

    class Meta:
        model = models.District
        fields = (
            'title',
            'region',
        )


class AddLocalityForm(forms.ModelForm):

    class Meta:
        model = models.Locality
        fields = (
            'title',
            'district',
        )


class AddAddressForm(forms.ModelForm):

    class Meta:
        model = models.Address
        fields = (
            'street',
            'locality',
        )


class AddCountryForm(forms.ModelForm):

    class Meta:
        model = models.Country
        fields = (
            'title',
        )
