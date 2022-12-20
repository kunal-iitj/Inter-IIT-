from django.urls import path
from user.views import UserRegistrationView, UserLoginView, UserProfileView, AddLikedSongView, RemoveLikedSongView


urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('addlikedsong/', AddLikedSongView.as_view(), name='addlikedsong'),
    path('removelikedsong/', RemoveLikedSongView.as_view(), name='removelikedsong'),
]
