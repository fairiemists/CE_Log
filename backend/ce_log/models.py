from django.db import models
from authentication.models import User

# Create your models here.

class Credit(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    agent_first_name = models.CharField(max_length=255)
    agent_last_name = models.CharField(max_length=255)
    course_name = models.CharField(max_length=50)
    course_date = models.DateField()
    cost = models.DecimalField(decimal_places=2, max_digits=8)
    credits = models.IntegerField()
    ethics = models.BooleanField(default=False)
    certificate = models.ImageField(null=True)

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class MyModel(models.Model):
    creator = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="listings")
    title = models.CharField(max_length=80, blank=False, null=False)
    description = models.TextField()
    image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)
