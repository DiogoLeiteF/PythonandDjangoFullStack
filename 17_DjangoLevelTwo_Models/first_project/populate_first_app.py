import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'first_project.settings')


import django

django.setup()

## Fake population script
import random
from first_app.models import Topic, AccessRecord, Webpage
from faker import Faker

fakegen = Faker()


## fro Topic use a list of topics
topics = ['Search', 'Social', 'Marketplace', 'News', 'Games']

def add_topic():
    t = Topic.objects.get_or_create(top_name= random.choice(topics))[0]
    t.save()
    return t


## for Webpage and AccessRecord use faker
def populate(N=5):
    for entry in range(N):

        # get the topic for the entry
        top = add_topic()

        #create fake data
        fake_url = fakegen.url()
        fake_date = fakegen.date()
        fake_name = fakegen.company

        #create new Webpage entry
        webpg = Webpage.objects.get_or_create(topic= top, name=fake_name, url=fake_url)[0]

        # Create fake access record entry
        acc_rec = AccessRecord.objects.get_or_create(name=webpg, date=fake_date)[0]

if __name__ == "__main__":
    print("Populating script")
    populate(20)
    print("Populating complete!") 


