from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from user.serializers import UserRegistrationSerializer, UserLoginSerializer, UserProfileSerializer
from user.renderers import UserRenderer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from user.models import User, Song
from csv import writer
import pandas as pd


# Generate Tokens Manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class UserRegistrationView(APIView):

    renderer_classes = [UserRenderer]

    def updateLikedCSV(self, userId):
        songs = Song.objects.all()
        
        n = 0
        with open('likes.csv', 'r') as f_object:
            n = sum(1 for line in f_object if line!='\n')
        n-=1
        with open('likes.csv', 'a', newline='') as f_object:
            writer_object = writer(f_object)
            for song in songs:
                row = [n, userId, song.songId, 0]
                writer_object.writerow(row)
                n+=1
            f_object.close()

    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = get_tokens_for_user(user)
            self.updateLikedCSV(user.id)
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

    def updateLikedCSV(self, userId, songId, liked, newEntry):
        userId = str(userId)
        songId = str(songId)
        liked = str(liked)
        if newEntry:
            n = 0
            with open('likes.csv', 'r') as f_object:
                n = sum(1 for line in f_object if line!='\n')

            with open('likes.csv', 'a', newline='') as f_object:
                writer_object = writer(f_object)
                row = [n-1, userId, songId, liked]
                writer_object.writerow(row)
                f_object.close()
        else:
            df = pd.read_csv("likes.csv")
            n = len(df)
            print(n)
            row = -1
            for i in range(n):
                if str(df["userId"][i]) == str(userId) and str(df["songId"][i]) == str(songId):
                    row = i
                    break
            if(row != -1):
                df.iloc[row, 3] = 1
            df.to_csv("likes.csv", index=False)


    def post(self, request):
        songId = request.data.get('songId')
        title = request.data.get('title')

        qset = Song.objects.filter(songId=str(songId))
        # print(".. ",qset)
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
            with open('songs_main.csv', 'a') as f_object:
                # print("here")
                writer_object = writer(f_object)
                row = [songId, songId, title, artist, genres, language]
                writer_object.writerow(row)
                f_object.close()

            self.updateLikedCSV(request.user.id, songId, "1", True)
        else:
            songObject = qset[0]
            songObject.user.add(request.user)
            self.updateLikedCSV(request.user.id, songId, "1", False)

        liked = request.user.song_set.all()
        likedSongs = [str(song) for song in liked]
        new_data = {'likedSongs':likedSongs}
        return Response(new_data, status=status.HTTP_200_OK)


class RemoveLikedSongView(APIView):

    permission_classes = [IsAuthenticated]

    def updateLikedCSV(self, userId, songId):
        
        userId = str(userId)
        songId = str(songId)

        df = pd.read_csv("likes.csv")
        n = len(df)
        print(n)
        row = -1
        for i in range(n):
            if str(df["userId"][i]) == str(userId) and str(df["songId"][i]) == str(songId):
                row = i
                break
        if(row != -1):
            df.iloc[row, 3] = 0
        df.to_csv("likes.csv", index=False)

    def post(self, request):
        songId = request.data.get('songId')
        qset = Song.objects.filter(songId=str(songId))

        songObject = qset[0]
        songObject.user.remove(request.user)

        self.updateLikedCSV(request.user.id, songId)

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
