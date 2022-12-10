from django.urls import path
from . import views 
urlpatterns = [
    path('', views.fetchTopEnglishPlaylist, name='english-playlist')
]