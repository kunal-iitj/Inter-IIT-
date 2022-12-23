from django.db import models
from user.models import User

# Create your models here.

class UserPreference(models.Model):
    languages = models.JSONField()



