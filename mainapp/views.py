from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import redirect
from django.views import View

import hashlib
import os
import json
from google_auth_oauthlib.flow import Flow
from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import make_password, check_password

from mainapp.models import AdwData, Users, Client, Projects

_SCOPE = ["https://www.googleapis.com/auth/adwords","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile","openid"]
_SERVER = "127.0.0.1"
_PORT = 8000
_REDIRECT_URI = f"http://{_SERVER}:{_PORT}/adwords/callback"
flow = Flow.from_client_secrets_file(r"D:\Projects\AdMigle\ads\client_secret_534721407121-nc1nsf5fp5c3e6hml6pkmt859nv0clb9.apps.googleusercontent.com.json", scopes=_SCOPE)



def index_view(request):
    print(request.user.id)
    return render(request, "index1.html", {})


class LoginView(View):
    def get(self, request):
        return render(request, "Sing_in.html", {})
    def post(self, request):
        email = request.POST["email"]
        password = request.POST["password"]
        try:
            user = Users.objects.get(email=email)
            if user:
                login(request, user, backend='django.contrib.auth.backends.ModelBackend')
                return redirect("create_user")
            else:
                return redirect("Login")
        except:
            return redirect("Login")




class Create_user(View):
    def get (self, request):
        users = Client.objects.filter(user_id=request.user)
        return render(request, "create_user.html", {"Users": users})
    def post(self, request):
        name = request.POST["name"]
        description = request.POST["description"]
        Client.objects.create(name=name, description=description, user_id=request.user)
        return redirect(request, "create_user.html", {})




class RegistretionView(View):
    def get(self, request):
        users = Users.objects.all()
        return render(request, "Sign_up.html", {})

    def post(self, request):
        print("post")
        email = str(request.POST["email"])
        password = str(request.POST["password"])
        username = str(email.split("@")[0])
        user = Users.objects.create_user(username=username, email=email, password=password)
        if user:
            login(request, user, backend="django.contrib.auth.backends.ModelBackend")

            return redirect("create_user")
        return


def callback_views(request):
    print(request)
    return render(request, "index.html", {})


def adwords(request):
    flow.redirect_uri = _REDIRECT_URI
    passthrough_val = hashlib.sha256(os.urandom(1024)).hexdigest()
    print(_REDIRECT_URI)
    authorization_url, state = flow.authorization_url(
        access_type="offline",
        state=passthrough_val,
        prompt="consent",
        include_granted_scopes="true",
    )
    return redirect(authorization_url)


def adwords_callback(request):
    code = request.GET["code"]
    flow.fetch_token(code=code)
    refresh_token = flow.credentials.refresh_token
    data = {
        "use_proto_plus": True,
        "developer_token": "pPK2EW0U4SF8Jz8tOYV4YQ",
        "client_id": "534721407121-nc1nsf5fp5c3e6hml6pkmt859nv0clb9.apps.googleusercontent.com",
        "client_secret": "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",
        "refresh_token": f"{refresh_token}",
    }
    googleads_client = GoogleAdsClient.load_from_dict(config_dict=data, version="v15")
    customer_service = googleads_client.get_service("CustomerService")
    accessible_customers = customer_service.list_accessible_customers()
    result_total = len(accessible_customers.resource_names)
    print(f"Total results: {result_total}")

    resource_names = accessible_customers.resource_names
    customer_id = str(resource_names[0]).split("/")[1]
    print(customer_id)
    print(refresh_token)
    awd_data = AdwData.objects.create(refresh_token=refresh_token,customer_id=customer_id, user_id=request.user)
    return redirect(r"http://localhost:3000/personal_account/api's_tab?Google%20Adw=200")


class ClientView(View):
    def get(self, request):
        client_id = request.GET["id"]
        projects = Projects.objects.filter(client_id=client_id)
        return render(request, "projects.html", {"Projects": projects})

    def post(self, request):
        name = request.POST["name"]
        description = request.POST["description"]
        Client.objects.create(name=name, description=description, user_id=request.user)
        return redirect("projects.html", {})