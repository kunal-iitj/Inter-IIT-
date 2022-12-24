from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
from .models import UserPreference
from user.models import User
import csv
from recommendation_algo import recommend


# Create your views here.

@api_view(['POST'])
def fetchPreference(request):
    body = request.body.decode('utf-8')
    body = json.loads(body)
    user = body['email']
    languageJson = body['languageJson']
    genresJson = body['genresJson']
    user_id = User.objects.get(email=user).id
    if UserPreference.objects.filter(user_id=user_id).exists():
        pass 
    else:
        preference = UserPreference.objects.create(user=user, languages=languageJson, genres=genresJson, user_id=user_id)
        preference.save()
    makePreferenceCsv()
    listOfsongs = recommend(user_id, 10, 'songs_main.csv', 'preference.csv', 'likes.csv')
    with open('recommendations.txt', 'w') as file:
        for song in listOfsongs:
            file.write(song + '\n')
    return Response({'message': 'success'})


def makePreferenceCsv():
    preferences = UserPreference.objects.all()
    with open('preference.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['user_id', 'languages', 'genres'])
        for preference in preferences:
            writer.writerow([preference.user_id, preference.languages, preference.genres])

        