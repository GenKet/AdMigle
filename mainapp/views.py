from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import redirect

import hashlib
import os
from google_auth_oauthlib.flow import Flow
from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

from mainapp.models import AdwData

_SCOPE = ["https://www.googleapis.com/auth/adwords"]
_SERVER = "127.0.0.1"
_PORT = 8000
_REDIRECT_URI = f"http://{_SERVER}:{_PORT}/adwords/callback"
flow = Flow.from_client_secrets_file(r"D:\Projects\AdMigle\ads\client_secret_534721407121-nc1nsf5fp5c3e6hml6pkmt859nv0clb9.apps.googleusercontent.com.json", scopes=_SCOPE)


def index_view(request):
    print(request.user.id)
    return render(request, "index1.html", {})


def login_view(request):
    return render(request, "index.html", {})


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
    awd_data = AdwData.objects.create(refresh_token=refresh_token,customer_id=customer_id, user_id=1)
    return HttpResponse(request)
