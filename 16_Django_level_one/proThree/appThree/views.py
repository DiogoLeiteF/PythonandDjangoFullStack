from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    my_content = {"home_content":"This is from the views"}
    
    return render(request, "appThree/index.html", context=my_content)