from django.urls import path
from . import views 
urlpatterns = [
    path('artists/', views.fetchRecommendedArtists, name='artist'),
    path('genres/', views.fetchGenres, name='genres'),
    path('featuredPlaylist', views.fetchFeaturedPlaylists, name='featured_playlist')
]