from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, "appFive/index.html")


def help(request):
    # return HttpResponse("Help")
    help_context = {"help_var": "This is the help from views"}

    return render(request, "appFive/help.html", context=help_context)
