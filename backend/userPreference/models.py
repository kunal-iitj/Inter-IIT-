from django.db import models

# Create your models here.

class UserPreference(models.Model):
    user = models.EmailField()
    languages = models.JSONField()
    genres = models.JSONField()
    user_id = models.IntegerField()