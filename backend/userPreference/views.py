from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import json
from .models import UserPreference

# Create your views here.

@api_view(['POST'])
def fetchPreference(request):
    body = request.body.decode('utf-8')
    body = json.loads(body)
    print(body)
    preference = UserPreference()
    preference.user = body['email']
    preference.languages = body['languageJson']
    preference.languages = body['genresJson']
    preference.save()
    return Response(body)

