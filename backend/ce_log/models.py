from django.db import models
from authentication.models import User

# Create your models here.

class Credit(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course_name = models.CharField(max_length=50)
    course_date = models.DateField()
    cost = models.IntegerField()
    credits = models.IntegerField()
    ethics = models.BooleanField(default=False)
    certificate = models.ImageField()
