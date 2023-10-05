from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect


def index_view(request):
    return render(request, "index1.html", {})

def login_view(request):
    return render(request, "index.html", {})

