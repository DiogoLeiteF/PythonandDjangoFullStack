from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<em>My Second App</em>")

def help(request):
    my_dic = {"help_content": "help from the views.py"}

    return render(request, template_name="appTwo/help.html", context=my_dic)