from django.db import models
from user.models import User

# Create your models here.

class UserPreference(models.Model):
    LANGUAGE_CHOICES = (
        ('HN', 'Hindi'),
        ('EN','English')
     )
    GENRES_CHOICES = (
        ('POP', 'Pop'),
        ('LATIN', 'Latin'),
        ('EDM', 'Edm')
     )
    languages = models.TextField(choices= LANGUAGE_CHOICES)
    genres = models.TextField(choices=GENRES_CHOICES)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

