#!/usr/bin/python
# -*- coding: utf-8 -*-

from django.test import TestCase

from ws_app.views import user_profile


class User_profile_test(TestCase):
    def test_user_profile_for_not_login_false(self):
        self.assertEqual(user_profile(None), False)