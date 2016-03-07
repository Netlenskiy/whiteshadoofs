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
