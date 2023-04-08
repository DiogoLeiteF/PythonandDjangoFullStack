from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request):
    # return HttpResponse("<em>My second app</em>")
    my_data = {"index_var": "Hello I am from appFour.views.py"}

    return render(request, 'appFour/index.html', context=my_data)