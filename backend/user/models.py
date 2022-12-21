from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import UserManager


class User(AbstractUser):

    username = None
    user_name = models.CharField(max_length=30, null=False)
    email = models.EmailField(unique=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.user_name

class Song(models.Model):

    songId = models.CharField(max_length=10, null=False, unique=True)
    title = models.CharField(max_length=255, null=False)
    artist = models.CharField(max_length=50)
    genres = models.CharField(max_length=50)
    language = models.CharField(max_length=50)
    user = models.ManyToManyField(User)

    def liked_by(self):
        return ", ".join([str(u) for u in self.user.all()])

    def __str__(self):
        return self.title
