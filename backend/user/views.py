from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from user.serializers import UserRegistrationSerializer, UserLoginSerializer, UserProfileSerializer
from user.renderers import UserRenderer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from user.models import User, Song

# Generate Tokens Manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class UserRegistrationView(APIView):

    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response({'token': token, 'msg': 'Registration Successful!'}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):

    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(email=email, password=password)

            if user is not None:
                token = get_tokens_for_user(user)
                return Response({'token': token, 'msg': 'Login Successful'}, status=status.HTTP_200_OK)
            else:
                return Response({'errors': {"non_field_errors": ["Email or Password is not valid."]}}, status=status.HTTP_404_NOT_FOUND)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddLikedSongView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):
        songId = request.data.get('songId')
        title = request.data.get('title')

        qset = Song.objects.filter(songId=str(songId))

        if (not qset) or (len(qset) == 0):
            qset = Song.objects.filter(title=title)

        if len(qset) == 0:
            lastId = Song.objects.last().songId
            songId = str(int(lastId) + 1)
            title = request.data.get('title')
            artist = request.data.get('artist')
            genres = request.data.get('genres')
            language = request.data.get('language')
            songObject = Song.objects.create(songId=songId, title=title, artist=artist, genres=genres, language=language)
            songObject.save()
            songObject.user.add(request.user)
        else:
            songObject = qset[0]
            songObject.user.add(request.user)

        liked = request.user.song_set.all()
        likedSongs = [str(song) for song in liked]
        new_data = {'likedSongs':likedSongs}
        return Response(new_data, status=status.HTTP_200_OK)


class RemoveLikedSongView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):
        songId = request.data.get('songId')
        qset = Song.objects.filter(songId=str(songId))

        songObject = qset[0]
        songObject.user.remove(request.user)

        liked = request.user.song_set.all()
        likedSongs = [str(song) for song in liked]
        new_data = {'likedSongs':likedSongs}
        return Response(new_data, status=status.HTTP_200_OK)



class UserProfileView(APIView):

    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)

        userObject = request.user
        liked = userObject.song_set.all()
        likedSongs = [str(i) for i in liked]

        new_data = dict(serializer.data)
        new_data.update({'likedSongs':likedSongs})
        return Response(new_data, status=status.HTTP_200_OK)
