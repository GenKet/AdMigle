from django.contrib import admin
from django.urls import path, include

from mainapp.views import adwords, adwords_callback


urlpatterns = [
    path("adwords/", adwords),
    path("adwords/callback", adwords_callback)
]