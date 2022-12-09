from django.db import models
from user.models import User

# Create your models here.

class Song(models.Model):
    name = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    url = models.URLField()

    def __str__(self):
        return self.name


class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    song = Song()

    def __str__(self):
        return self.song.name
