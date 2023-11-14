from django.contrib import admin
from django.urls import path, include

from mainapp.views import adwords, adwords_callback, RegistretionView, Create_user, LoginView, callback_views, ClientView


urlpatterns = [
    path("", LoginView.as_view(), name="Login"),
    path("create_user/",Create_user.as_view(), name="create_user"),
    path("registration/", RegistretionView.as_view(), name="registration"),
    path("client/", ClientView.as_view()),

    path("adwords/", adwords),
    path("adwords/callback", adwords_callback),

    path('/google/login/callback/', callback_views, name='signup_redirect'),
]