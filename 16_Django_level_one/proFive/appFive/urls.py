from django.urls import re_path
from appFive import views

urlpatterns = [
    re_path(r'^$', views.index, name="index"),
    re_path(r'^help/', views.help, name="help"),
]