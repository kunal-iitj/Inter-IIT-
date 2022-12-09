from django.db import models

# Create your models here.

class Song(models.Model):
    name = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    url = models.URLField()

    def __str__(self):
        return self.name


class Favorite(models.Model):
    song = Song()
