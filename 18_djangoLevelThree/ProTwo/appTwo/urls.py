from django.urls import path, re_path
from appTwo import views


urlpatterns=[
    re_path('^$', views.users, name="users")
]

