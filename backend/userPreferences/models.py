from django.db import models
from user.models import User

# Create your models here.

class UserPreference(models.Model):
    languages = models.JSONField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)



