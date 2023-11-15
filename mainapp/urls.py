from django.contrib import admin
from django.urls import path, include

from mainapp.views import *


urlpatterns = [
    path("", LoginView.as_view(), name="Login"),
    path("create_user/",Create_user.as_view(), name="create_user"),
    path("registration/", RegistretionView.as_view(), name="registration"),
    path("client/", ClientView.as_view()),

    path("adwords/", adwords),
    path("adwords/callback", adwords_callback),

    path('/google/login/callback/', callback_views, name='signup_redirect'),
    path('apis/', ApisViews.as_view()),
    path('facebook_login/', ApisViews.as_view())
]