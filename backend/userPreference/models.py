from django.db import models

# Create your models here.

class UserPreference(models.Model):
    languages = models.JSONField()
    genres = models.JSONField(default=None)
    user = models.EmailField()
    user_id = models.IntegerField()

    def __str__(self):
        return self.user