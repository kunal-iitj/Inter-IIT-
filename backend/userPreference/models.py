from django.db import models

# Create your models here.

class UserPreference(models.Model):
    languages = models.JSONField()
    genres = models.JSONField()
    user = models.EmailField()

    def __str__(self):
        return self.user