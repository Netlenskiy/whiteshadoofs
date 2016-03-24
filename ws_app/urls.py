
from django.conf.urls import url
from . import views
ws_patterns = [
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^objects_search', views.objects_search, name='objects_search'),
    url(r'^fetch_placemarks', views.fetch_placemarks, name='fetch_placemarks'),
    url(r'^get_fe_menu', views.GetFEMenuView.as_view(), name='get_fe_menu'),
    url(r'^register/$', views.RegisterFormView.as_view(), name='register'),
    url(r'^profile$', views.ProfileView.as_view(), name='profile'),
    url(r'^login/$', views.LoginFormView.as_view(), name='login'),
    url(r'^logout/$', views.LogoutView.as_view(), name='logout'),
    url(r'^add/$', views.AddObjectFormView.as_view(), name='add'),
    url(r'^add_address/$', views.AddAddressFormView.as_view(), name='add_address'),
    url(r'^point_address/$', views.PointAddressFormView.as_view(), name='point_address'),
    url(r'^add_locality/$', views.AddLocalityFormView.as_view(), name='add_locality'),
    url(r'^add_district/$', views.AddDistrictFormView.as_view(), name='add_district'),
    url(r'^add_region/$', views.AddRegionFormView.as_view(), name='add_region'),
    url(r'^add_country/$', views.AddCountryFormView.as_view(), name='add_country'),
    url(r'^add_mem_event/$', views.AddMemEventFormView.as_view(), name='add_mem_event'),
    # url(r'^placemark_icons/(?P<icon>.*)', views.get_placemark_icon),
]