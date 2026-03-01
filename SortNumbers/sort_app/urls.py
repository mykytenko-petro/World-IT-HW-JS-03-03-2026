from django.urls import path

from .views import render_sort


urlpatterns = [
    path(route='', view=render_sort),
]