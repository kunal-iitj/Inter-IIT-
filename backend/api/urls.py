from django.urls import path
from . import views 
urlpatterns = [
    path('artists/', views.fetchRecommendedArtists, name='artist'),
    path('playlist/', views.fetchCategoryPlaylist, name='playlist'),

]