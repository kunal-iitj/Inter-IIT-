from django.urls import path
from . import views 
urlpatterns = [
    path('artist/', views.fetchArtist, name='artist')
]