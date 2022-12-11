from django.db import models

# Create your models here.

class Artist: 
    def __init__(self, givenName, givenImages, givenGenres):
        self.name = givenName
        self.images = givenImages
        self.genres = givenGenres